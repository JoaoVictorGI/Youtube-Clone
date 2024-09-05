import { MaterialSymbol, type SymbolCodepoints } from "react-material-symbols"
import { useNavigate } from "react-router-dom"
import { Fragment } from "react/jsx-runtime"
import { DropdownContainer, MenuItem, Span } from "./styles"

const items = [
  { name: "Conta", link: "" },
  { name: "Definições", link: "" },
]

const icons: SymbolCodepoints[] = ["account_circle", "settings"]

function Dropdown() {
  const navigate = useNavigate()
  return (
    <DropdownContainer>
      {items.map((item, idx) => (
        <Fragment key={item.name}>
          <MenuItem onClick={() => item.link && navigate(item.link)}>
            <MaterialSymbol icon={icons[idx]} size={24} fill />
            <Span>{item.name}</Span>
          </MenuItem>
        </Fragment>
      ))}
    </DropdownContainer>
  )
}

export default Dropdown
