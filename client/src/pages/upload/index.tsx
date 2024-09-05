import { useContext, useState } from "react"
import { UserContext } from "../../context/userContext"
import { Button, Container, Input, Link } from "./styles"

function Upload() {
  const { handleUpload } = useContext(UserContext)

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [thumbnail, setThumbnail] = useState("")

  return (
    <Container>
      <h1 style={{ fontSize: "32px" }}>Fazer login</h1>
      <Input
        type="thumbnail"
        value={thumbnail}
        placeHolder="Insira o link da thumnail aqui"
        onChange={(e) => setThumbnail(e.target.value)}
      />
      <Input
        type="title"
        value={title}
        placeHolder="Título"
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="description"
        value={description}
        placeHolder="Descrição"
        onChange={(e) => setDescription(e.target.value)}
      />

      <Button onClick={() => handleUpload(thumbnail, title, description)}>
        Entrar
      </Button>
      <p>
        Não tem uma conta?<Link href="sign-up"> Clique aqui</Link> para criar
        uma conta
      </p>
    </Container>
  )
}

export default Upload
