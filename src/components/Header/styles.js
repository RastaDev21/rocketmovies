import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_300};
  opacity: 1;

  display: flex;
  justify-content: space-between;

  padding: 0 80px;

  > h1 {
    display: flex;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.PINK};
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
  > div {
    display: flex;
    flex-direction: column;
    margin-right: 16px;
    line-height: 24px;

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Logout = styled.button`
  background: none;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`;
