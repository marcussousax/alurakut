import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../src/styles/global.styled'
import { appTheme } from '../src/styles/appTheme'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <ThemeProvider theme={appTheme}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}
