import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";
`;
export const Form = styled.form`
  grid-area: content;
  /* max-width: 630px; */
  width: 1137px;
  margin: 30px auto;
`;
export const Button = styled.button`
  height: 56px;
`;

export const MovieItensContainer = styled.div`
  display: flex;
  border-radius: 8px;

  /* padding: 16px;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch; */

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`;

// export const Main = styled.main`
//   width: 1366px;
//   height: 1024px;
//   // Você pode adicionar outros estilos aqui, se necessário
// `;
