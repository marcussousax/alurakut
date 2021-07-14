import { createGlobalStyle } from 'styled-components'
import ResetCSS from './reset.styled'

const GlobalStyle = createGlobalStyle`
  ${ResetCSS}

  body {
    background-color: #D9E6F6;
    font-family: sans-serif;
  }
`

export default GlobalStyle
