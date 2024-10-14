import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.BACKGROUND_400};

  color: ${({ theme }) => theme.COLORS.PINK};

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};

  margin-top: 8px;
  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 16px;

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
  .button-add {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > input {
    height: 56px;
    width: 200px;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.PINK};
    background: transparent;
    border: none;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;
