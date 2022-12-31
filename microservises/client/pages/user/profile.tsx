import React, { useState } from "react";
import { toast } from "react-toastify";
import Layout from "../../components/layout/Layout";
import { useActions } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import UserProfile from "../../components/user/userProfile";
import { isNormalUser } from "../../hooks/useCheckAuth";

const profile = () => {
  const { user } = useTypedSelector((state) => state.user);
  
  isNormalUser();

  return (
    <Layout title={`Welcome ${user?.name && user.name}`}>
      <UserProfile />
    </Layout>
  );
};

export default profile;
