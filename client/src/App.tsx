import Header from "./components/header"
import "react-material-symbols/sharp"
import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Menu from "./components/menu"
import { UserStorage } from "./context/userContext"
import History from "./pages/history"
import Home from "./pages/home"
import Library from "./pages/library"
import Login from "./pages/login"
import SignUp from "./pages/sign-up"

function App() {
  const [openMenu, setOpenMenu] = useState(true)

  return (
    <UserStorage>
      <BrowserRouter>
        <div>
          <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
          <div style={{ width: "100%", display: "flex" }}>
            <Menu openMenu={openMenu} />
            <div
              style={{
                width: "100vw",
                padding: "50px 70px",
                boxSizing: "border-box",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Routes>
                <Route path="/" element={<Home openMenu={openMenu} />} />
                <Route path="/library" element={<Library />} />
                <Route path="/history" element={<History />} />
                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
                {
                  // TODO: Criar tela e integração para cadastro de vídeo
                  // TODO: Implementação de pesquisa
                }
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </UserStorage>
  )
}

export default App
