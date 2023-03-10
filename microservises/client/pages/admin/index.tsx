import Router from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Users from "../../components/admin/Users";
import Layout from "../../components/layout/Layout";
import { useActions } from "../../hooks/useAction";
import { isAdminUser, isNormalUser, useCheckAuth } from "../../hooks/useCheckAuth";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { AllUsersState } from "../../models/admin";
import { AuthState } from "../../models/user";
import { getAllUsers } from "../../redux/actions-creater/adminAction";

const index: React.FC = (): JSX.Element => {
  const { getAllUsers } = useActions();

  const { user }: AuthState = useTypedSelector((state) => state.user);
  const { users }: AllUsersState = useTypedSelector((state) => state.allUsers);

  isAdminUser();
  useEffect(() => {
    getAllUsers("");
  }, []);

  return (
    <div>
      <Layout title={"Admin"}>
        <h1 style={{ marginLeft: "25px", marginTop: "20px" }}>
          User Management
        </h1>
        {users?.map((el: any) => {
          return <Users user={el} />;
        })}
      </Layout>
    </div>
  );
};

export default index;
