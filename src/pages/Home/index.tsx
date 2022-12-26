import { Header } from "../../components/header";
import { Banner } from "../../components/Banner";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />
      <Banner />
    </Container>
  );
}
