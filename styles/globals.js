import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;

    background: url("radio.gif") no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxyge
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

   a {
    color: inherit;
    text-decoration: none;
  }

   * {
    box-sizing: border-box;
  }
`
