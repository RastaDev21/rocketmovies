import { FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";

import { Container, Form, Avatar } from "./styles";

import { ButtonArrow } from "../../components/ButtonArrow";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {
  return (
    <Container>
      <header>
        <ButtonArrow title={"Voltar"} />
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/RastaDev21.png" alt="Foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>

        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Senha atual" type="password" icon={FiLock} />
        <Input placeholder="Nova senha" type="password" icon={FiLock} />
        <Button
          title="Salvar"
          style={{ width: "100%", marginTop: "24px", marginLeft: "150px" }}
        />
      </Form>
    </Container>
  );
}
