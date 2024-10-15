import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    padding: 64px 0;
  }
`;

export const Content = styled.div`
  width: 1140px;
  height: 581px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 50px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: none;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background: #ff859b;
  }

  > p {
    font-size: 16px;
    margin-top: 16px;
    text-align: justify;
  }
  > h1 {
    display: flex;
    gap: 20px;
    font-size: 36px;
  }
`;
