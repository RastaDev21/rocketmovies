import { Header } from "../../components/Header";
import { ButtonArrow } from "../../components/ButtonArrow";
import { Textarea } from "../../components/Textarea";
import { Input } from "../../components/Input";
import { MovieItem } from "../../components/MovieItem";

import { Container, Form, MovieItensContainer } from "./styles";
import { Button } from "../../components/Button";

export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <ButtonArrow title={"Voltar"} />
          <h1>Novo Filme</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "40px",
              margin: "40px 0",
            }}
          >
            <div style={{ display: "flex", gap: "40px", width: "100%" }}>
              <Input placeholder="Título" />
              <Input placeholder="Sua nota (de 0 a 5)" />
            </div>
          </div>
          <div style={{ margin: "40px 0" }}>
            <Textarea style={{ height: "224px" }} placeholder="Observações" />
          </div>
          <h2 style={{ position: "relative", top: "-24px", margin: 0 }}>
            Marcadores
          </h2>
          <MovieItensContainer style={{ marginBottom: "40px" }}>
            <MovieItem value="React" />
            <MovieItem isNew placeholder="Novo marcador" />
          </MovieItensContainer>

          <div style={{ display: "flex", gap: "40px", width: "100%" }}>
            <Button title="Excluir Filme" variant="delete" />
            <Button title="Salvar alterações" />
          </div>
        </Form>
      </main>
    </Container>
  );
}
