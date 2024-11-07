import { Container } from "./styles";

import { Star } from "../Star";
import { Tag } from "../Tag";

export function Movie({ data, onClick }) {
  return (
    <Container onClick={onClick}>
      <h1> {data.title}</h1>
      <Star rating={data.rating} />

      <p>{data.description}</p>

      <div style={{ marginBottom: "15px" }}>
        {data.tags &&
          data.tags.map((tag, index) => <Tag key={index} title={tag.name} />)}
      </div>
    </Container>
  );
}
