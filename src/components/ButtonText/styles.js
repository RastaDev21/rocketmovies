import styled from "styled-components";

export const Container = styled.button`
  background: none;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  font-size: 18px;
`;
