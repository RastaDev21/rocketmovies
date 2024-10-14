import { Container } from "./styles";

import { Star } from "../Star";
import { Tag } from "../Tag";

export function Movie() {
  return (
    <Container>
      <h1>Interestellar</h1>
      <Star />

      <p>
        Pragas nas colheitas fizeram a civilização humana regredir para uma
        sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da
        NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de
        Cooper, acredita que seu quarto está assombrado por um fantasma que
        tenta se ...
      </p>
      <div style={{ marginBottom: "15px" }}>
        <Tag title="Ficção cientifica " />
        <Tag title="Drama " />
        <Tag title="Familia " />
      </div>
    </Container>
  );
}
