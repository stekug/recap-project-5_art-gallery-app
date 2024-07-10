import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --primary-color: #e8479b;
    --secondary-color: #17f1b3;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: system-ui;
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
