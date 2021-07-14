import 'styled-components'
import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        mainBackgroundColor: string;
        gray1: string
        gray2: string
    }
}

const lightTheme: DefaultTheme = {
    mainBackgroundColor: '#D9E6F6',
    gray1: '#333333',
    gray2: '#5A5A5A'
}

const darkTheme: DefaultTheme = {
    mainBackgroundColor: '#D9E6F6',
    gray1: '#333333',
    gray2: '#5A5A5A'
}

export { lightTheme as appTheme }

