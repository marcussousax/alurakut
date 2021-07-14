import { createGlobalStyle } from 'styled-components'
import ResetCSS from './reset.styled'

const GlobalStyle = createGlobalStyle`
  ${ResetCSS}

  body {
    background-color: ${({ theme }) => theme.mainBackgroundColor};
    font-family: sans-serif;
  }

  #__next {
    min-height: 100vh;
  }
`

export default GlobalStyle
