import { MaterialSymbol } from "react-material-symbols";
import Logo from "../../assets/yt-logo.png";
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
} from "./styles";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

interface IProps {
  openMenu: boolean;
  setOpenMenu: (openMenu: boolean) => void;
}

function Header({ openMenu, setOpenMenu }: IProps) {
  const { login, logOut, user } = useContext(UserContext);

  const navigate = useNavigate();

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
          alt="YouTube Logo"
          src={Logo}
        />
      </LogoContainer>
      <SearchContainer>
        <SearchInputContainer>
          <SearchInput placeholder="Pesquisar" />
        </SearchInputContainer>
        <SearchButton>
          <MaterialSymbol icon="search" size={28} grade={-25} weight={200} />
        </SearchButton>
        <ButtonContainer margin="0 0 0 10px">
          <MaterialSymbol icon="mic" size={28} fill grade={-25} weight={200} />
        </ButtonContainer>
      </SearchContainer>
      <HeaderButtons>
        <ButtonContainer>
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
            <AccountContainer onClick={() => navigate("/login")}>
              <span style={{ fontWeight: "600" }}>{user.nome.charAt(0)}</span>
            </AccountContainer>
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
  );
}

export default Header;
