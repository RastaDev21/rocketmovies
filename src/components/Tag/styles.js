import styled from "styled-components";

export const Container = styled.span`
  font-size: 12px;
  padding: 5px 14px;
  border-radius: 5px;
  margin-right: 6px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  width: 121px;
  height: 30px;
  padding: 8px 16px;
  align-items: flex-start;
  gap: 8px;
`;
