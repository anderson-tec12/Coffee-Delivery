import { MapPin, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.svg";
import { ContainerHeader } from "./styles";

export function Header() {
  return (
    <ContainerHeader>
      <img src={Logo} alt="" />

      <nav>
        <Link to="/">
          <MapPin size={22} color="#8047F8" weight="fill" />
          São Paulo, SP
        </Link>

        <Link to="/checkout" className="shop">
          <ShoppingCart size={22} color="#C47F17" weight="fill" />
        </Link>
      </nav>
    </ContainerHeader>
  );
}
