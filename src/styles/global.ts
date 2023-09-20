import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    /* border: 1px solid ${(props) => props.theme["blue"]}; */
    box-shadow: 0 0 0 1px ${(props) => props.theme["blue"]};
  }

  ::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }

  body {
    background-color: ${(props) => props.theme["base-background"]};
    color: ${(props) => props.theme["base-text"]};
    -webkit-font-smoothing: antialiased;
  }

  body, button, input {
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
  html {
    font-size: 87.5%;
  }
}
`;
