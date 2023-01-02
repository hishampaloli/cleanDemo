import Router from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { toast } from "react-toastify";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { AuthState } from "../../models/user";
import { useActions } from "../../hooks/useAction";
import AuthForm from "../../components/user/authForm";
import { useCheckAuth } from "../../hooks/useCheckAuth";

const signin: React.FC = () => {
  
  useCheckAuth();
  return (
    <Layout title={"Register"}>
      <AuthForm formFor="login" />
    </Layout>
  );
};

export default signin;
