import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
      color: ${(props) => props.theme.mainColor};
      background-color: ${(props) => props.theme.backgroundColor}
    }
  `;

export const theme = {
  mainColor: "black",
  backgroundColor: "white",
};

export const Title = styled.h1`
  text-align: center;
`;

export const HoleImage = styled.div`
  margin: 20px;
  border-radius: 50%;
  height: 200px;
  width: 200px;
  background-color: black;
`;

export const AvocadoImage = styled.img`
  /* margin: 20px; */
  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
  }
`;

const ListWrapper = styled.div`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  border: solid;
  border-color: black;
  margin: 50px;
`;

export default ListWrapper;
