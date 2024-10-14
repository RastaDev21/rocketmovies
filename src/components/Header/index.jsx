import { Container, Profile, Logout } from "./styles";
import { useTheme } from "styled-components";
import { ButtonText } from "../ButtonText";
import { Input } from "../Input";

export function Header() {
  const theme = useTheme();
  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input placeholder="Pesquisar pelo título" />
      <Profile>
        <div>
          <strong>Humberto Martins</strong>
          <ButtonText
            style={{
              textAlign: "end",
              color: theme.COLORS.GRAY_100,
            }}
            title="sair"
          />
        </div>
        <img src="https://github.com/RastaDev21.png" alt="Foto do usuario" />
      </Profile>
    </Container>
  );
}
