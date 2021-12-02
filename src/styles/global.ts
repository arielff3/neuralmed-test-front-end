import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;

  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  h1,h2 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

`
