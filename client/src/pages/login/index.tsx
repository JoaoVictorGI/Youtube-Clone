import type React from "react";
import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import { Button, Container, Input, Link } from "./styles";

function Login() {
	const { handleLogin } = useContext(UserContext);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleKeyDown = (event: React.KeyboardEvent) => {
		if (event.key === "Enter") {
			handleLogin(email, password);
		}
	};

	return (
		<Container>
			<h1 style={{ fontSize: "32px" }}>Fazer login</h1>
			<Input
				type="email"
				value={email}
				placeholder="E-mail"
				onChange={(e) => setEmail(e.target.value)}
			/>
			<Input
				type="password"
				value={password}
				placeholder="Senha"
				onChange={(e) => setPassword(e.target.value)}
				onKeyDown={handleKeyDown}
			/>

			<Button onClick={() => handleLogin(email, password)}>Entrar</Button>
			<p>
				Não tem uma conta?<Link href="sign-up"> Clique aqui</Link> para criar
				uma conta
			</p>
		</Container>
	);
}

export default Login;
