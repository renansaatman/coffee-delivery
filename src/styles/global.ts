import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']};
  }
  body {
    /* background: ${(props) => props.theme['yellow-dark']}; */
    /* color: ${(props) => props.theme['yellow-dark']}; */
    -webkit-font-smoothing: antialiased;
  }
`

// font-family: 'Baloo 2', cursive;
// font-family: 'Roboto', sans-serif;