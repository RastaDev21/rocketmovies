import { Container, Content, ScrollableDiv } from "./styles";
import { api } from "../../services/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

import { Movie } from "../../components/Movie";

export function Home() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  function handleAddMovie() {
    navigate("/new");
  }

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/notes?title=${search}`);
      setMovies(response.data);
    }

    fetchMovies();
  }, [search]);

  return (
    <Container>
      <Header setSearch={setSearch} />
      <Content>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
            marginLeft: "30px",
          }}
        >
          <h1>Meus Filmes</h1>
          <Button title="+ Adicionar Filme" onClick={handleAddMovie} />
        </div>

        <ScrollableDiv>
          {movies.map(note => {
            return (
              <Movie
                key={String(note.id)}
                data={note}
                onClick={() => handleDetails(note.id)}
              />
            );
          })}
        </ScrollableDiv>
      </Content>
    </Container>
  );
}
