import React from 'react'
import styled, { CSSObject, CSSProp } from 'styled-components'

interface IBox {
    css?: CSSProp | CSSObject
}

const Box = styled.div<IBox>`
  background-color: #fff;
`

export default Box
