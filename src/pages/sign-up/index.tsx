import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import { Container, Input, Button } from "./styles";

function SignUp() {
  const { handleSignUp } = useContext(UserContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <h1 style={{ fontSize: "32px" }}>Fazer cadastro</h1>
      <Input
        type="name"
        value={name}
        placeHolder="Nome"
        onChange={(e) => setName(e.target.value)}
      />

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

      <Button onClick={() => handleSignUp(name, email, password)}>
        Criar conta
      </Button>
    </Container>
  );
}

export default SignUp;
