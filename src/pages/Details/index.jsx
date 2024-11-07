import { useState, useEffect } from "react";
import { Container, Content } from "./styles";
import { useParams, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonArrow } from "../../components/ButtonArrow";
import { Star } from "../../components/Star";

export function Details() {
  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);

      setData(response.data);
    }

    fetchNote();
  }, []);

  return (
    <Container>
      <Header />
      {data && (
        <main>
          <Content>
            <ButtonArrow title="Voltar" onClick={handleBack} />

            <h1>
              {data.title}
              <Star rating={data.rating} />
            </h1>

            <Section title={data.title} createdAt={data.created_at} />

            {data.tags && (
              <div style={{ marginBottom: "20px" }}>
                {data.tags.map(tag => (
                  <Tag key={String(tag.id)} title={tag.name} />
                ))}
              </div>
            )}

            <p>{data.description}</p>
          </Content>
        </main>
      )}
    </Container>
  );
}
