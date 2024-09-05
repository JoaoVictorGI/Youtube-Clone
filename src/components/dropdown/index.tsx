import { MaterialSymbol, SymbolCodepoints } from "react-material-symbols";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { DropdownContainer, MenuItem, Span } from "./styles";

const items = [
  { name: "Conta", link: "" },
  { name: "Definições", link: "" },
  { name: "Terminar sessão", link: "" },
];

const icons: SymbolCodepoints[] = ["account_circle", "settings", "logout"];

function Dropdown() {
  const navigate = useNavigate();
  return (
    <DropdownContainer>
      {items.map((item, idx) => (
        <Fragment key={idx}>
          <MenuItem onClick={() => item.link && navigate(item.link)}>
            <MaterialSymbol icon={icons[idx]} size={24} fill />
            <Span>{item.name}</Span>
          </MenuItem>
        </Fragment>
      ))}
    </DropdownContainer>
  );
}

export default Dropdown;
