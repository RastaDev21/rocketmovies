import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;

  margin: 28px 0;

  > h2 {
    width: 209px;
    height: 19px;

    color: ${({ theme }) => theme.COLORS.WHITE};

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  > img {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }
  > svg {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.WHITE};

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
