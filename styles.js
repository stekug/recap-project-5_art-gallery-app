import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: system-ui;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  h1 {
    margin: 0;
    padding: 0;
  }
`;
