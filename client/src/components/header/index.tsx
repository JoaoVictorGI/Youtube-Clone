import type React from "react"
import { useContext, useState } from "react"
import { MaterialSymbol } from "react-material-symbols"
import { useNavigate } from "react-router-dom"
import Logo from "../../assets/yt-logo.png"
import { UserContext } from "../../context/userContext"
import Dropdown from "../dropdown"
import {
  AccountContainer,
  ButtonContainer,
  Container,
  HeaderButtons,
  LoginContainer,
  LogoContainer,
  SearchButton,
  SearchContainer,
  SearchInput,
  SearchInputContainer,
} from "./styles"

interface IProps {
  openMenu: boolean
  setOpenMenu: (openMenu: boolean) => void
  onSearch: (term: string) => void
}

function Header({ openMenu, setOpenMenu, onSearch }: IProps) {
  const { login, logOut, user } = useContext(UserContext)
  const navigate = useNavigate()
  const [openDrop, setOpenDrop] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
    onSearch(event.target.value)
  }

  return (
    <Container>
      <LogoContainer>
        <ButtonContainer
          onClick={() => setOpenMenu(!openMenu)}
          margin="0 10px 0 0"
        >
          <MaterialSymbol icon="menu" size={28} grade={-25} weight={200} />
        </ButtonContainer>
        <img
          style={{ cursor: "pointer", width: "100px" }}
          onClick={() => navigate("/")}
          alt="YouTube Logo"
          src={Logo}
        />
      </LogoContainer>
      <SearchContainer>
        <SearchInputContainer>
          <SearchInput
            placeholder="Pesquisar"
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </SearchInputContainer>
        <SearchButton>
          <MaterialSymbol icon="search" size={28} grade={-25} weight={200} />
        </SearchButton>
        <ButtonContainer margin="0 0 0 10px">
          <MaterialSymbol icon="mic" size={28} fill grade={-25} weight={200} />
        </ButtonContainer>
      </SearchContainer>
      <HeaderButtons>
        <ButtonContainer onClick={() => navigate("/upload")}>
          <MaterialSymbol
            icon="video_call"
            size={28}
            grade={-25}
            weight={200}
          />
        </ButtonContainer>
        <ButtonContainer margin="0 0 0 10px">
          <MaterialSymbol
            icon="notifications"
            size={28}
            grade={-25}
            weight={200}
          />
        </ButtonContainer>
        {login ? (
          <>
            <AccountContainer onClick={() => setOpenDrop(!openDrop)}>
              <span style={{ fontWeight: "600" }}>{user?.name?.charAt(0)}</span>
            </AccountContainer>
            {openDrop ? <Dropdown /> : null}
            <ButtonContainer
              style={{ marginLeft: "10px" }}
              onClick={() => logOut()}
            >
              <MaterialSymbol
                icon="logout"
                size={28}
                grade={-25}
                weight={200}
              />
            </ButtonContainer>
          </>
        ) : (
          <LoginContainer onClick={() => navigate("/login")}>
            <MaterialSymbol
              icon="account_circle"
              size={28}
              grade={-25}
              weight={200}
            />
            <span>Fazer Login</span>
          </LoginContainer>
        )}
      </HeaderButtons>
    </Container>
  )
}

export default Header
