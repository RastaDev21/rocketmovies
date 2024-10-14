import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;
  height: 100vh;
`;

export const Content = styled.div`
  padding: 62px 124px;

  div {
    /* background-color: yellow;
    margin-right: 10px; */
  }

  h1 {
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    /* margin-left: 75px; */
    /* margin-top: 50px; */
  }

  button {
    display: inline-flex;
    width: 207px;
    height: 48px;
    padding: 32px;
    align-items: center;
    gap: 8px;
    /* flex-shrink: 0; */
    /* margin-right: 70px;
    margin-top: 50px; */
  }
`;
export const ScrollableDiv = styled.div`
  overflow-y: scroll;
  height: 712px;

  /* Estilizando a barra de rolagem */
  ::-webkit-scrollbar {
    width: 10px; /* Largura da barra de rolagem */
  }

  ::-webkit-scrollbar-thumb {
    background-color: red; /* Cor do "polegar" da barra */
    border-radius: 10px; /* Arredondando o polegar */
    border: 2px solid #555; /* Adicionando borda ao polegar */
  }
`;
