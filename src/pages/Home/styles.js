import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;
  height: 100vh;
`;

export const Content = styled.div`
  padding: 62px 124px;

  > h1 {
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-left: 100px;
  }

  button {
    display: inline-flex;
    width: 207px;
    height: 48px;
    padding: 32px;
    align-items: center;
    gap: 8px;
  }
`;
export const ScrollableDiv = styled.div`
  overflow-y: scroll;
  height: 712px;
  height: calc(100vh - 350px);
  padding: 24px;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: none;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background: #ff859b;
  }
`;
