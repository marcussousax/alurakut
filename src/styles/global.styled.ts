import { createGlobalStyle } from 'styled-components'
import ResetCSS from './reset.styled'
import { AlurakutStyles } from '../lib/AlurakutCommons'

export const common = {
    GAP: '10px',
    PADDING: '16px'
}

const GlobalStyle = createGlobalStyle`
  ${ResetCSS}
  ${AlurakutStyles}
  body {
    background-color: ${({ theme }) => theme.mainBackgroundColor};
    font-family: sans-serif;
  }

  #__next {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
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
