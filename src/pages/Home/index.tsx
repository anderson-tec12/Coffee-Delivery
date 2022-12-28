import { Header } from "../../components/header";
import { Banner } from "../../components/Banner";
import { Catalog, Container } from "./styles";
import { CoffeCatalog } from "../../base/CoffeCatalog";
import { Card } from "../../components/Card";

const coffeList = CoffeCatalog;
export function Home() {
  return (
    <Container>
      <Header />
      <Banner />

      <Catalog>
        <h2>Nossos cafés</h2>

        <ul>
          {coffeList.map((coffe) => (
            <Card key={coffe.id.toString()} data={coffe} />
          ))}
        </ul>
      </Catalog>
    </Container>
  );
}
