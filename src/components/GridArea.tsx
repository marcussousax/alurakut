import styled, { css } from 'styled-components'

interface IGridArea {
    readonly areaName?: string | undefined
}

const GridArea = styled.div<IGridArea>`
  ${({ areaName }) => css`
    grid-area: ${areaName};
  `}
`

export default GridArea
