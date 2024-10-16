import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.PINK_DARK};

  display: flex;
  flex-direction: column;
  padding: 20px 32px;
  border-radius: 16px;
  margin-bottom: 24px;

  h1 {
    width: 217px;
    height: 32px;
    margin-left: 0px;
    margin-bottom: 10px;
  }

  p {
    width: 100%;
    height: 52px;
    align-self: stretch;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: justify;
    margin-bottom: 25px;
  }
`;
