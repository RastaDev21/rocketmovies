import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: hidden;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";
`;
export const Form = styled.form`
  grid-area: content;
  width: 1137px;
  height: calc(100vh - 165px);
  margin: 30px auto;
  padding: 24px;
  overflow-y: scroll;

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
export const Button = styled.button`
  height: 56px;
`;

export const MovieItensContainer = styled.div`
  display: flex;
  border-radius: 8px;
  flex-wrap: wrap;
  margin-bottom: 16px;

  background-color: black;
`;
