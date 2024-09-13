import { useContext, useState } from "react"
import { UserContext } from "../../context/userContext"
import { Button, Container, Input } from "./styles"

function Upload() {
  const { handleUpload } = useContext(UserContext)

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [thumbnail, setThumbnail] = useState("")

  return (
    <Container>
      <h1 style={{ fontSize: "32px" }}>Novo vídeo</h1>
      <Input
        type="thumbnail"
        value={thumbnail}
        placeholder="Insira o link da thumnail aqui"
        onChange={(e) => setThumbnail(e.target.value)}
      />
      <Input
        type="title"
        value={title}
        placeholder="Título"
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="description"
        value={description}
        placeholder="Descrição"
        onChange={(e) => setDescription(e.target.value)}
      />

      <Button onClick={() => handleUpload(thumbnail, title, description)}>
        Enviar
      </Button>
    </Container>
  )
}

export default Upload
