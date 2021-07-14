import 'styled-components'
import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        mainBackgroundColor: string;
        blue1: string
        blue2: string
        blue3: string
        blue4: string
        blue5: string
        gray1: string
        gray2: string
        white: string
    }
}

const lightTheme: DefaultTheme = {
    mainBackgroundColor: '#D9E6F6',
    blue1: '#5C9ECF',
    blue2: '#388BB0',
    blue3: '#2F4A71',
    blue4: '#6F92BB',
    blue5: '#5579A1',
    gray1: '#333333',
    gray2: '#5A5A5A',
    white: '#ffffff'
}

const darkTheme: DefaultTheme = {
    mainBackgroundColor: '#D9E6F6',
    blue1: '#5C9ECF',
    blue2: '#388BB0',
    blue3: '#2F4A71',
    blue4: '#6F92BB',
    blue5: '#5579A1',
    gray1: '#333333',
    gray2: '#5A5A5A',
    white: '#ffffff'
}

export { lightTheme as appTheme }

