import styled from 'styled-components'
import { OrkutNostalgicIconSet } from '../lib/AlurakutCommons'
import Box from '../components/Box'
import GridArea from '../components/GridArea'
import Header from '../components/Header'
import { media } from '../styles/global.styled'
import React from 'react'
import Profile from '../components/Profile'


export default function Home() {

    const user = 'marcussousax'

    return (
        <>
            <Header user={user} />
            <MainGrid>
                <GridArea areaName="profileArea">
                    <Profile user={user} />
                </GridArea>
                <GridArea areaName="welcomeArea">
                    <Box css={`padding: 24px`}>
                        <h1 className={'title'}>Bem-vindo(a), {user}</h1>
                        <p>Sorte de hoje: O melhor profeta do futuro é o passado</p>
                        <OrkutNostalgicIconSet />
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
  flex: 1;

  ${media.large} {
    display: grid;
    grid-template-areas: "profileArea welcomeArea profileRelationsArea";
    grid-template-columns: 160px 1fr 312px;
  }
`
