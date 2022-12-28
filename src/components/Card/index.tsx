import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { CardContainer } from "./style";

interface Props {
  data: {
    image: string;
    name: string;
    tags: string[];
    desc: string;
    price: string;
    id: number;
  };
}

export function Card({ data }: Props) {
  const { image, name, tags, desc, price, id } = data;
  const [quantities, setQuantities] = useState(1);

  function handleAddQuantities() {
    const quantitiesUpdate = quantities + 1;
    setQuantities(quantitiesUpdate);
  }

  function handleSubtractQuantities() {
    if (quantities === 1) return;
    const quantitiesUpdate = quantities - 1;
    setQuantities(quantitiesUpdate);
  }

  const disableButtonRemoveOneQuantities = quantities === 1;
  const amount = quantities * Number(price);

  const test = new Intl.NumberFormat("pt-BR", {}).format(amount);

  return (
    <CardContainer>
      <header>
        <img src={image} alt={name} />

        <div>
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </header>

      <main>
        <p>{name}</p>
        <small>{desc}</small>
      </main>

      <footer>
        <span>
          <small>R$</small>
          {test}
        </span>
        <div>
          <button
            disabled={disableButtonRemoveOneQuantities}
            onClick={handleSubtractQuantities}
          >
            <Minus size={14} weight="bold" />
          </button>

          <button className="price">{quantities}</button>

          <button onClick={handleAddQuantities}>
            <Plus size={14} weight="bold" />
          </button>
        </div>
        <button>
          <ShoppingCart size={22} color="#fff" weight="fill" />
        </button>
      </footer>
    </CardContainer>
  );
}
