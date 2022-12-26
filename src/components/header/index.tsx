import { MapPin, ShoppingCart } from "phosphor-react";

import Logo from "../../assets/logo.svg";
import { ContainerHeader } from "./styles";

export function Header() {
  return (
    <ContainerHeader>
      <img src={Logo} alt="" />

      <nav>
        <a href="#">
          <MapPin size={22} color="#8047F8" weight="fill" />
          São Paulo, SP
        </a>

        <a href="#" className="shop">
          <ShoppingCart size={22} color="#C47F17" weight="fill" />
        </a>
      </nav>
    </ContainerHeader>
  );
}
