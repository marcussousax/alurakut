import styled, { css, CSSObject, CSSProp } from 'styled-components'

interface IGridArea {
    areaName?: string | undefined
    css?: CSSProp | CSSObject
}

const GridArea = styled.div<IGridArea>`
  ${({ areaName }) => css`
    grid-area: ${areaName}
  `}
`

export default GridArea
