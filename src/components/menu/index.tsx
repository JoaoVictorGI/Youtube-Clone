import { MaterialSymbol, SymbolCodepoints } from "react-material-symbols";
import { Fragment } from "react/jsx-runtime";
import { Container, MenuItem, Separator, Span } from "./styles";
import { useNavigate } from "react-router-dom";

const items = [
  { name: "Início", link: "/" },
  { name: "Shorts" },
  { name: "Inscrições" },
  { name: "Biblioteca", link: "/library" },
  { name: "Histórico", link: "/history" },
  { name: "Em alta" },
  { name: "Shopping" },
  { name: "Música" },
  { name: "Filmes" },
  { name: "Ao vivo" },
  { name: "Jogos" },
  { name: "Notícias" },
  { name: "Esportes" },
  { name: "Cursos" },
  { name: "Podcasts" },
];
const icons: SymbolCodepoints[] = [
  "home",
  "acute",
  "subscriptions",
  "for_you",
  "history",
  "mode_heat",
  "shopping_bag",
  "music_note",
  "movie",
  "stream",
  "videogame_asset",
  "news",
  "trophy",
  "lightbulb",
  "podcasts",
];

const itemsWithSeparator = ["Inscrições", "Histórico"];

interface IProps {
  openMenu: boolean;
}

function Menu({ openMenu }: IProps) {
  const navigate = useNavigate();
  return (
    <Container variant={openMenu ? "opened" : "closed"}>
      {items.map((item, idx) => (
        <Fragment key={idx}>
          <MenuItem
            variant={openMenu ? "opened" : "closed"}
            onClick={() => item.link && navigate(item.link)}
          >
            <MaterialSymbol icon={icons[idx]} size={24} fill />
            <Span variant={openMenu ? "opened" : "closed"}>{item.name}</Span>
          </MenuItem>
          {itemsWithSeparator.includes(item.name) && <Separator />}
        </Fragment>
      ))}
    </Container>
  );
}

export default Menu;
