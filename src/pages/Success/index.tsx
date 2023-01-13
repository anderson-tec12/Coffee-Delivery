import { SuccessContainer } from "./styles";
import SuccessIMG from "../../assets/success.png";
import { MapPin, Timer, Money } from "phosphor-react";

export function Success() {
  return (
    <SuccessContainer>
      <article>
        <header>
          <strong>Uhu! Pedido confirmado</strong>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </header>

        <ul>
          <li>
            <div className="icon purple">
              <MapPin size={16} color="#fff" weight="fill" />
            </div>
            <div className="info-plus">
              <span>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </span>
              <span>Farrapos - Porto Alegre, RS</span>
            </div>
          </li>

          <li>
            <div className="icon yellow">
              <Timer size={16} color="#fff" weight="fill" />
            </div>
            <div className="info-plus">
              <span>Previsão de entrega</span>
              <span>
                <strong>20 min - 30 min</strong>
              </span>
            </div>
          </li>

          <li>
            <div className="icon yellow-dark">
              <Money size={16} color="#fff" weight="fill" />
            </div>
            <div className="info-plus">
              <span>Pagamento na entrega</span>
              <span>
                <strong>Cartão de Crédito</strong>
              </span>
            </div>
          </li>
        </ul>
      </article>

      <img src={SuccessIMG} alt="" />
    </SuccessContainer>
  );
}
