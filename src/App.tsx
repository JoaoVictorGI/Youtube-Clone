import Header from "./components/header";
import "react-material-symbols/sharp";
import Menu from "./components/menu";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Library from "./pages/library";
import History from "./pages/history";
import { UserStorage } from "./context/userContext";
import Login from "./pages/login";

function App() {
  const [openMenu, setOpenMenu] = useState(true);

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
                {
                  // TODO: Implementar um menu dropdown no ícone de usuário
                  // TODO: Tela de cadastro
                  // TODO: Criar tela e integração para cadastro de vídeo
                  // TODO: Implementação de pesquisa
                }
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </UserStorage>
  );
}

export default App;
