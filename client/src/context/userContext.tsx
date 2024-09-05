import type React from "react";
import { createContext, useCallback, useEffect, useState } from "react";
import api from "../api";

interface UserContextType {
	login: boolean;
	user: Record<string, object>;
	token: string;
	handleLogin: (email: string, password: string) => void;
	logOut: () => void;
	handleSignUp: (name: string, email: string, password: string) => void;
	handleUpload: (thumbnail: string, title: string, description: string) => void;
}

export const UserContext = createContext<UserContextType>({
	login: false,
	user: {},
	token: "",
	handleLogin: () => {
		/**/
	},
	logOut: () => {
		/**/
	},
	handleSignUp: () => {
		/**/
	},
	handleUpload: () => {
		/**/
	},
});

export const UserStorage = ({ children }: { children: React.ReactNode }) => {
	const [login, setLogin] = useState(false);
	const [user, setUser] = useState({});
	const [token, setToken] = useState(localStorage.getItem("token") as string);

	const getUser = useCallback((token: string) => {
		api
			.get("/user/get-user", { headers: { Authorization: token } })
			.then(({ data }) => {
				setUser(data.user);
				setLogin(true);
			})
			.catch((error) => {
				console.log("Usuário não autenticado", error);
			});
	}, []);

	useEffect(() => {
		getUser(token);
	}, [token, getUser]);

	const logOut = () => {
		localStorage.removeItem("token");
		setLogin(false);
		setUser({});

		window.location.reload();
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

				window.location.href = "/";
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

	const handleUpload = (
		thumbnail: string,
		title: string,
		description: string,
	) => {
		api
			.post("upload", {
				thumbnail,
				title,
				description,
			})
			.catch((error) => {
				console.log("Não foi possível fazer o upload do vídeo: ", error);
				return error;
			});
	};

	return (
		<UserContext.Provider
			value={{
				login,
				user,
				token,
				handleLogin,
				logOut,
				handleSignUp,
				handleUpload,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};
