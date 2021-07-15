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
            <MainGridWrapper>
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
            </MainGridWrapper>
        </>
    )
}

const MainGrid = styled.main`
  max-width: 1110px;
  gap: 10px;
  padding: 16px;
  flex: 1;

  ${media.large} {
    display: grid;
    grid-template-areas: "profileArea welcomeArea profileRelationsArea";
    grid-template-columns: 160px 1fr 312px;
  }
`
const MainGridWrapper = styled.section`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`
