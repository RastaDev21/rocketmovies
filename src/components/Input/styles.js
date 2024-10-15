import styled from "styled-components";

export const Container = styled.div`
  width: 630px;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  margin-top: 30px;
  border-radius: 10px;

  height: 56px;

  > input {
    padding: 24px;

    color: ${({ theme }) => theme.COLORS.GRAY_300};
    background: transparent;
    border: 0;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > svg {
    margin-left: 16px;
  }
`;
