import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global.styled'
import AppTheme from '../styles/appTheme'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={AppTheme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}
