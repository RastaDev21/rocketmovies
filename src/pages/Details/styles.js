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
    overflow-y: scroll;
    padding: 64px 0;
  }
`;

export const Content = styled.div`
  width: 1140px;
  height: 581px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  /* > button:first-child {
    margin-right: 100px;
  } */

  /* > h1 {
    font-size: 36px;
    font-weight: 500;
    padding-top: 64px;
  } */

  > p {
    font-size: 16px;
    margin-top: 16px;
    text-align: justify;
  }
  > h1 {
    /* width: 368px; */
    /* height: 47px; */
    display: flex;
    /* align-items: center; */
    gap: 20px;
    font-size: 36px;
  }
`;
