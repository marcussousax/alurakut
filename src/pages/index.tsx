import Image from 'next/image'
import styled from 'styled-components'
import Box from '../components/Box'
import GridArea from '../components/GridArea'
import Header from '../components/Header'
import { media } from '../styles/global.styled'

export default function Home() {
    return (
        <>
            <Header />
            <MainGrid>
                <GridArea areaName="profileArea">
                    <Box css={`padding: 10px`}>
                        <Image src="https://github.com/marcussousax.png" alt="User Logo" width={121} height={121} />
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
        </>
    )
}

const MainGrid = styled.main`

  gap: 10px;
  padding: 16px;

  ${media.large} {
    display: grid;
    grid-template-areas: "profileArea welcomeArea profileRelationsArea";
    grid-template-columns: 160px 1fr 312px;
  }
`
