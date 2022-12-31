import React, { useState } from "react";
import { toast } from "react-toastify";
import { useActions } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { AuthState } from "../../models/user";
import styles from "../../styles/Profile.module.scss";
import UserProfileEditable from "./userProfileEditable";

const UserProfile = () => {
  const { user }: AuthState = useTypedSelector((state) => state.user);
  const [edit, setEdit] = useState<boolean>(false);

  return (
    <div className={styles.profileBox}>
      <div className={styles.profileDiv}>
        <h2 style={{ textAlign: "center" }}>My Profile</h2>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            margin: "20px",
          }}
        >
          <img
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            src={user?.image}
            alt=""
          />
        </div>
        <p>
          {" "}
          <strong>Email: </strong> {user?.email}
        </p>
        <p>
          <strong>Name: </strong> {user?.name}
        </p>
        <p>
          <strong>Adress: </strong> {user?.address}
        </p>

        <button style={{ marginTop: "30px" }} onClick={() => setEdit(!edit)}>
          Edit
        </button>
      </div>
      {edit && <UserProfileEditable />}
    </div>
  );
};

export default UserProfile;
