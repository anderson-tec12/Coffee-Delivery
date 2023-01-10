import { SuccessContainer } from "./styles";
import SuccessIMG from "../../assets/success.png";

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
            <div></div>
            <div>
              <span>Entrega em Rua João Daniel Martinelli, 102</span>
              <span>Farrapos - Porto Alegre, RS</span>
            </div>
          </li>

          <li>
            <div></div>
            <div>
              <span>Previsão de entrega</span>
              <span>20 min - 30 min </span>
            </div>
          </li>

          <li>
            <div></div>
            <div>
              <span>Pagamento na entrega</span>
              <span>Cartão de Crédito</span>
            </div>
          </li>
        </ul>
      </article>

      <img src={SuccessIMG} alt="" />
    </SuccessContainer>
  );
}
