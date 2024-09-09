import type React from "react"
import { useContext, useState } from "react"
import { UserContext } from "../../context/userContext"
import { Button, Container, Input } from "./styles"

function SignUp() {
  const { handleSignUp } = useContext(UserContext)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleSignUp(name, email, password)
    }
  }

  return (
    <Container>
      <h1 style={{ fontSize: "32px" }}>Fazer cadastro</h1>
      <Input
        type="name"
        value={name}
        placeholder="Nome"
        onChange={(e) => setName(e.target.value)}
      />

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

      <Button onClick={() => handleSignUp(name, email, password)}>
        Criar conta
      </Button>
    </Container>
  )
}

export default SignUp
