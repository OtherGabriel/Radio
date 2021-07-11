import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;

    background-color: #a7ff83;

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
