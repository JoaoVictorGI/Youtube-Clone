import { createContext, useEffect, useState } from "react";
import api from "../api";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const UserContext = createContext({} as any);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const UserStorage = ({ children }: any) => {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({});
  const [token, setToken] = useState(localStorage.getItem("token") as string);

  const getUser = (token: string) => {
    api
      .get("/user/get-user", { headers: { Authorization: token } })
      .then(({ data }) => {
        setUser(data.user);
        setLogin(true);
      })
      .catch((error) => {
        console.log("Usuário não autenticado", error);
      });
  };

  useEffect(() => {
    getUser(token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logOut = () => {
    localStorage.removeItem(token);
    setLogin(false);
    setUser({});
  };

  const handleLogin = (email: string, password: string) => {
    api
      .post("/user/sign-in", {
        email,
        password,
      })
      .then(({ data }) => {
        setLogin(true);

        localStorage.setItem("token", data.token);
        setToken(data.token);
        getUser(data.token);
      })
      .catch((error) => {
        console.log("Não foi possível fazer o login");
        return error;
      });
  };

  const handleSignUp = (name: string, email: string, password: string) => {
    api
      .post("/user/sign-up", {
        name,
        email,
        password,
      })
      .catch((error) => {
        console.log("Não foi possível fazer o cadastro");
        return error;
      });
  };

  return (
    <UserContext.Provider
      value={{
        login,
        user,
        handleLogin,
        logOut,
        handleSignUp,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
