import Router from "next/router";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { AuthState } from "../models/user";
import { useActions } from "./useAction";
import { useTypedSelector } from "./useTypedSelector";

export const useCheckAuth = () => {
  const { user, error }: AuthState = useTypedSelector((state) => state.user);
  const { clearErrors } = useActions();

  useEffect(() => {
    if (user?.email === "admin@gmail.com") {
      Router.push("/admin");
    }

    if (user?.email) {
      Router.push("/");
    }
    if (error) {
      toast.success(`${error}`);
      clearErrors();
    }
  }, [error]);
};

export const isNormalUser = () => {
  const { user }: AuthState = useTypedSelector((state) => state.user);

  useEffect(() => {
    if (user?.email === "admin@gmail.com") {
      Router.back();
    }
  }, []);
};

export const isAdminUser = () => {
    const { user }: AuthState = useTypedSelector((state) => state.user);
  
    useEffect(() => {
      if (user?.email !== "admin@gmail.com") {
        Router.back();
      }
    }, []);
  };
  