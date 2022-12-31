import Router from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { useActions } from "../../hooks/useAction";
import styles from "../../styles/SignUp.module.scss";
import { useCheckAuth } from "../../hooks/useCheckAuth";

const AuthForm = ({ formFor }: { formFor: string }) => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { signUp, Login } = useActions();

  const handleAuth = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    if (formFor === "register") signUp("", { name, email, password });
    if (formFor === "login") Login("", { email, password });
  };

  useCheckAuth();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className={styles.loginBox}>
        <h1>{formFor === "register" ? "Register" : "Login"}</h1>
        <div>
          <form onSubmit={handleAuth} style={{ display: "flex" }}>
            {formFor === "register" && (
              <div>
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  name=""
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setName(e.target.value)
                  }
                  placeholder="name"
                  id=""
                />
              </div>
            )}

            <div>
              <label htmlFor="">Email</label>
              <input
                type="email"
                name=""
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                placeholder="email"
                id=""
              />
            </div>

            <div>
              <label htmlFor="">Password</label>
              <input
                type="text"
                name=""
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                placeholder="password"
                id=""
              />
            </div>
            <button type="submit">
              {formFor === "register" ? "Register" : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
