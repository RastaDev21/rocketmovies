import { Container, Content, ScrollableDiv } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

import { Movie } from "../../components/Movie";

export function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <h1>Meus Filmes</h1>
          <Button title="+ Adicionar Filme" />
        </div>
        <ScrollableDiv>
          <Movie />
          <Movie />
          <Movie />
        </ScrollableDiv>
      </Content>
    </Container>
  );
}
