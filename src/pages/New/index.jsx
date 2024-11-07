import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { ButtonArrow } from "../../components/ButtonArrow";
import { Textarea } from "../../components/Textarea";
import { Input } from "../../components/Input";
import { MovieItem } from "../../components/MovieItem";

import { api } from "../../services/api";

import { Container, Form, MovieItensContainer } from "./styles";
import { Button } from "../../components/Button";

export function New() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  function handleBack() {
    navigate("/");
  }

  async function handleNewNote() {
    if (!title) {
      return alert("Digite o título da nota");
    }
    if (newTag) {
      return alert(
        "Você deixou uma tag no campo para adicionar ,mas não clicou em adicionar.Clique para adicionar ou deixe o campo vazio"
      );
    }

    if (rating === "") {
      return alert("Por favor, atribua uma nota de 0 a 5.");
    }
    await api.post("/notes", {
      title,
      description,
      tags,
      rating: Number(rating),
    });
    alert("Nota criada com sucesso!");
    navigate(-1);
  }

  return (
    <Container>
      <Header />
      <main>
        <Form>
          <ButtonArrow title={"Voltar"} onClick={handleBack} />
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
              <Input
                placeholder="Título"
                onChange={e => setTitle(e.target.value)}
              />
              <Input
                placeholder="Sua nota (de 0 a 5)"
                value={rating}
                onChange={e => {
                  const value = e.target.value;
                  if (
                    value === "" ||
                    (Number(value) >= 0 && Number(value) <= 5)
                  ) {
                    setRating(value);
                  } else {
                    alert("Digite uma nota de 0 a 5");
                  }
                }}
              />
            </div>
          </div>
          <div style={{ margin: "40px 0" }}>
            <Textarea
              style={{ height: "224px" }}
              placeholder="Observações"
              onChange={e => setDescription(e.target.value)}
            />
          </div>
          <h2 style={{ position: "relative", top: "-24px", margin: 0 }}>
            Marcadores
          </h2>
          <MovieItensContainer
            style={{ marginBottom: "40px", padding: "8px 16px", gap: "8px" }}
          >
            {tags.map((tag, index) => (
              <MovieItem
                key={String(index)}
                value={tag}
                onClick={() => handleRemoveTag(tag)}
              />
            ))}

            <MovieItem
              isNew
              placeholder="Novo marcador"
              value={newTag}
              onChange={e => setNewTag(e.target.value)}
              onClick={handleAddTag}
            />
          </MovieItensContainer>

          <div style={{ display: "flex", gap: "40px", width: "100%" }}>
            <Button
              title="Excluir Filme"
              variant="delete"
              onClick={handleBack}
            />
            <Button title="Salvar alterações" onClick={handleNewNote} />
          </div>
        </Form>
      </main>
    </Container>
  );
}
