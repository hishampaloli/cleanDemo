import React, { useState } from "react";
import { toast } from "react-toastify";
import { useActions } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const UserProfileEditable = () => {
  const { user } = useTypedSelector((state) => state.user);
  const { UpdateUser } = useActions();
  const [userEdits, setUserEdits] = useState<{
    address?: string;
    image?: string;
  }>({
    address: "",
    image: "",
  });

  const handleUpdate = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (user) {
      const data = await UpdateUser("", userEdits, user?.id);

      if (`${data}` === "User Updated") {
        toast.success(`${data}`);
      } else {
        toast.error(`${data}`);
      }
    }
  };

  return (
    <form onSubmit={handleUpdate}>
      <h2 style={{ textAlign: "center" }}>Change Details</h2>
      <div>
        <label htmlFor="">Address</label>
        <input
          type="text"
          placeholder={user?.address}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUserEdits({ address: e.target.value })
          }
        />
      </div>

      <div>
        <label htmlFor="">Image URL</label>
        <input
          type="text"
          placeholder={user?.image}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUserEdits({ image: e.target.value })
          }
        />
      </div>
      <button style={{ marginTop: "20px" }} type="submit">
        Update
      </button>
    </form>
  );
};

export default UserProfileEditable;
