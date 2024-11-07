import { useNavigate } from "react-router-dom";
import { Container, Profile, Logout } from "./styles";
import { useTheme } from "styled-components";
import { ButtonText } from "../ButtonText";
import { Input } from "../Input";
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { useAuth } from "../../hooks/auth";

export function Header({ setSearch }) {
  const theme = useTheme();
  const { signOut, user } = useAuth();

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;
  const navigate = useNavigate();
  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input
        placeholder="Pesquisar pelo título"
        type="text"
        onChange={e => setSearch(e.target.value)}
      />
      <Profile>
        <div>
          <strong>{user.name}</strong>
          <ButtonText
            style={{
              textAlign: "end",
              color: theme.COLORS.GRAY_100,
            }}
            title="sair"
            onClick={handleSignOut}
          />
        </div>
        <img
          src={avatarUrl}
          alt={user.name}
          onClick={() => navigate("/profile")}
        />
      </Profile>
    </Container>
  );
}
