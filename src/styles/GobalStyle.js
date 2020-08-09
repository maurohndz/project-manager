import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root{
    /* fonts */
    --body: 'Open Sans', sans-serif;
    /* fonts color */
    --ligth: #ffffff;
    /*App */
    --soft-gray: #e8e8e8;
    --success: #40ad40;
    /* Colors Back */
    --blue-back: #0D76C0;
    --purple-back: #4D68C5;
  }

  html {
    font-family: var(--body)
  }
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`
