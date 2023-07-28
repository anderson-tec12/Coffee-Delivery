import { ShoppingCart, Timer, Package, Coffee } from "phosphor-react";
import { BannerContainer } from "./styles";
import BannerImg from "../../assets/banner.svg";

export function Banner() {
  return (
    <BannerContainer>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <span>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </span>

        <ul>
          <li>
            <div className="darkyellow">
              <ShoppingCart fontSize={32} color="#FAFAFA" weight="fill" />
            </div>
            Compra Simples e segura
          </li>
          <li>
            <div className="silver">
              <Package fontSize={32} color="#FAFAFA" weight="fill" />
            </div>
            Embalagem mantém o café intacto
          </li>
          <li>
            <div className="yellow">
              <Timer fontSize={32} color="#FAFAFA" weight="fill" />
            </div>
            Entrega rápida e rastreada
          </li>
          <li>
            <div className="purple">
              <Coffee fontSize={32} color="#FAFAFA" weight="fill" />
            </div>
            O café chega fresquinho até você
          </li>
        </ul>
      </div>

      <div>
        <img src={BannerImg} alt="" />
      </div>
    </BannerContainer>
  );
}
