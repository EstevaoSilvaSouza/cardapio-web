import { Link } from "react-router-dom";
import { DivHeader, LinkS, Lista, MenuItem } from "../style/headerstyled";

const HeaderMenu = () => {
  return (
    <DivHeader>
      <Lista>
        <MenuItem>
          <LinkS to={"/"}>Inicio</LinkS>
        </MenuItem>
        <MenuItem>
          <LinkS to={"/"}>Suporte</LinkS>
        </MenuItem>
        <MenuItem>
          <LinkS to={"/"}>Carrinho</LinkS>
        </MenuItem>
      </Lista>
    </DivHeader>
  );
};

export default HeaderMenu;
