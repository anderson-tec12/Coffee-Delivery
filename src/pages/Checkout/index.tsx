import {
  MapPin,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
  Trash,
} from "phosphor-react";

import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { CheckoutConatiner } from "./styles";

export function Checkout() {
  const { handleSubmit, register } = useForm();
  const [type, setType] = useState<"Credit" | "Debit" | "Money" | "">("");

  function handleSetType(value: "Credit" | "Debit" | "Money" | "") {
    setType(value);
  }

  return (
    <CheckoutConatiner>
      <section>
        <span className="title">Complete seu pedido</span>
        <article>
          <header>
            <MapPin color="#C47F17" size={22} />
            <div>
              <strong>Endereço de Entrega</strong>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </header>

          <main>
            <div>
              <input type="text" placeholder="CEP" />
            </div>

            <div className="street-name">
              <input type="text" placeholder="Rua" />
            </div>

            <div className="street-number">
              <input type="text" placeholder="Número" />
              <input type="text" placeholder="Complemento" />
            </div>

            <div className="street-city">
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <input className="uf" type="text" placeholder="UF" />
            </div>
          </main>

          <footer>
            <div className="header">
              <CurrencyDollar color="#8047F8" size={22} />
              <div>
                <strong>Endereço de Entrega</strong>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </div>

            <div className="footer">
              <button
                type="button"
                onClick={() => handleSetType("Credit")}
                className={type === "Credit" ? "actived" : ""}
              >
                <CreditCard size={18} color="#8047F8" />
                Cartão de Crédito
              </button>

              <button
                type="button"
                onClick={() => handleSetType("Debit")}
                className={type === "Debit" ? "actived" : ""}
              >
                <Bank size={18} color="#8047F8" /> Cartão de Débito
              </button>

              <button
                type="button"
                onClick={() => handleSetType("Money")}
                className={type === "Money" ? "actived" : ""}
              >
                <Money size={18} color="#8047F8" /> Dinheiro
              </button>
            </div>
          </footer>
        </article>
      </section>

      <section className="list">
        <span className="title">Cafés selecionados</span>

        <main>
          <ul>
            <li>
              <img src="coffee_1.png" />
              <div>
                <div className="title-value">
                  <span className="name">Expresso tradicional</span>
                  <span className="price">R$ 9,90</span>
                </div>

                <div className="actions">
                  <div className="container-buttons">
                    <button>
                      <Minus size={12} weight="bold" />
                    </button>
                    <span className="price">1</span>
                    <button>
                      <Plus size={12} weight="bold" />
                    </button>
                  </div>

                  <button className="delete">
                    <Trash size={16} color="#8047f8" /> Remover
                  </button>
                </div>
              </div>
            </li>

            <li>
              <img src="coffee_1.png" />
              <div>
                <div className="title-value">
                  <span className="name">Expresso tradicional</span>
                  <span className="price">R$ 9,90</span>
                </div>

                <div className="actions">
                  <div className="container-buttons">
                    <button>
                      <Minus size={12} weight="bold" />
                    </button>
                    <span className="price">1</span>
                    <button>
                      <Plus size={12} weight="bold" />
                    </button>
                  </div>

                  <button className="delete">
                    <Trash size={16} color="#8047f8" /> Remover
                  </button>
                </div>
              </div>
            </li>
          </ul>
          <footer>
            <div className="resume">
              <div className="default">
                <span>Total de itens</span> <span>R$ 29,70</span>
              </div>
              <div className="default">
                <span>Entrega</span> <span>R$ 3,50</span>
              </div>
              <div className="total">
                <span>Total</span> <span>R$ 33,20</span>
              </div>
            </div>
            <button className="confirm">Confirma Pedido</button>
          </footer>
        </main>
      </section>
    </CheckoutConatiner>
  );
}
