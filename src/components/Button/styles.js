// import styled from "styled-components";

// export const Container = styled.button`
//   width: 100%;
//   background-color: ${({ theme }) => theme.COLORS.PINK};
//   color: ${({ theme }) => theme.COLORS.BACKGROUND_300};

//   height: 56px;
//   border: 0;
//   padding: 0 16px;
//   margin-top: 16px;
//   border-radius: 10px;
//   font-weight: 500;

//   &:disabled {
//     opacity: 0.5;
//   }
// `;

import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme, variant }) =>
    variant === "delete"
      ? "black"
      : theme.COLORS.PINK}; /* Preto para deletar, rosa para salvar */
  color: ${({ theme }) => theme.COLORS.BACKGROUND_300};

  height: 56px;
  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`;
