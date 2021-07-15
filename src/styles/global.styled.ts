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

const customMediaQuery = (minWidth: number) =>
    `@media (min-width: ${minWidth}px)`
export const media = {
    custom: customMediaQuery,
    large: customMediaQuery(900),
    small: customMediaQuery(768),
    xsmall: customMediaQuery(576),
}


export default GlobalStyle
