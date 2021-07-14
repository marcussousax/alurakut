import styled from 'styled-components'
import Box from '../components/Box'
import GridArea from '../components/GridArea'

export default function Home() {
    return (
        <MainGrid>
            <GridArea areaName="profileArea">
                <Box>
                    <p>profileArea</p>
                </Box>
            </GridArea>
            <GridArea areaName="welcomeArea">
                <Box>
                    <p>welcomeArea</p>
                </Box>
            </GridArea>
            <GridArea areaName="profileRelationsArea">
                <Box>
                    <p>profileRelationsArea</p>
                </Box>
            </GridArea>
        </MainGrid>
    )
}

const MainGrid = styled.main`

  gap: 10px;
  padding: 16px;

  @media (min-width: 860px) {
    display: grid;
    grid-template-areas: "profileArea welcomeArea profileRelationsArea";
    grid-template-columns: 160px 1fr 312px;
  }
`
