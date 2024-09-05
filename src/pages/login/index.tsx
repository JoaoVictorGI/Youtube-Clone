import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import { Container, Input, Button, Link } from "./styles";

function Login() {
  const { handleLogin } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <h1 style={{ fontSize: "32px" }}>Fazer login</h1>
      <Input
        type="email"
        value={email}
        placeHolder="E-mail"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        value={password}
        placeHolder="Senha"
        onChange={(e) => setPassword(e.target.value)}
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
