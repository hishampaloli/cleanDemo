import React, { useEffect, useState } from "react";
import styles from "../../styles/SignUp.module.scss";
import Router from "next/router";
import Layout from "../../components/layout/Layout";
import { toast } from "react-toastify";
import { AuthState } from "../../models/user";
import { useActions } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import AuthForm from "../../components/user/authForm";

const SignUp: React.FC = () => {
  return (
    <Layout title={"Login"}>
      <AuthForm formFor={"register"} />
    </Layout>
  );
};

export default SignUp;
