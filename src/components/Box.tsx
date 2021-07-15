import React from 'react'
import styled, { CSSObject, CSSProp } from 'styled-components'

interface IBox {
    css?: CSSProp | CSSObject
}

const Box = styled.div<IBox>`
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;
`

export default Box
