import { MapPinLine, ShoppingCart } from "phosphor-react";

import Logo from "../../assets/logo.svg";
import { ContainerHeader } from "./styles";

export function Header() {
  return (
    <ContainerHeader>
      <img src={Logo} alt="" />

      <nav>
        <a href="#">
          <MapPinLine size={22} color="#8047F8" />
          São Paulo, SP
        </a>

        <a>
          <ShoppingCart size={22} />
        </a>
      </nav>
    </ContainerHeader>
  );
}
