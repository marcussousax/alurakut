import styled from 'styled-components'
import { OrkutNostalgicIconSet } from '../lib/AlurakutCommons'
import Box from '../components/Box'
import GridArea from '../components/GridArea'
import Header from '../components/Header'
import { common, media } from '../styles/global.styled'
import React from 'react'
import Profile from '../components/Profile'
import RelationsBox from '../components/RelationsBox'
import CommunitiesBox from '../components/CommunitiesBox'
import FollowersBox from '../components/FollowersBox'

export interface ICommunity {
    title: string
    image?: string | number
}

export default function Home() {

    const user = 'marcussousax'
    const favoritePersons = ['marcussousax', 'provi', 'jvrmaia', 'TheOfficialFloW', 'Rinnegatamante']

    const [communities, setCommunities] = React.useState<ICommunity[]>([
        { title: 'Game Emulation', image: 300 },
        { title: 'Guitars', image: 350 }
    ])

    const [followers, setFollowers] = React.useState([])

    function handleSubmit(ev: React.FormEvent<HTMLFormElement>,
                          state: ICommunity[],
                          hook: { (value: React.SetStateAction<ICommunity[]>): void; (arg0: any[]): void }) {
        ev.preventDefault()
        const formData = new FormData(ev.target as HTMLFormElement)
        hook([...state, {
            title: formData.get('title'),
            image: formData.get('image')
        }])
    }

    React.useEffect(() => {
        fetch('https://api.github.com/users/marcussousax/followers')
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error(`Error on Req -> ${res}`)
            })
            .then((res) => setFollowers(res))
            .catch((err) => console.error(err))
    }, [])

    return (
        <>
            <Header user={user} />
            <MainGridWrapper>
                <MainGrid>
                    <GridArea areaName="profileArea">
                        <Profile user={user} />
                    </GridArea>
                    <GridArea areaName="welcomeArea" css={`
                      display: flex;
                      gap: 10px;
                      flex-direction: column;
                    `}>
                        <Box css={`padding: 24px`}>
                            <h1 className={'title'}>Bem-vindo(a), {user}</h1>
                            <p>Sorte de hoje: O melhor profeta do futuro é o passado</p>
                            <OrkutNostalgicIconSet />
                        </Box>
                        <Box>
                            <h2 className={'subTitle'}>O que você deseja fazer?</h2>
                            <form
                                onSubmit={(ev) => handleSubmit(ev, communities, setCommunities)}>
                                <input type="text"
                                       name="title"
                                       placeholder="Qual vai ser o nome da sua comunidade?"
                                       aria-label="Qual vai ser o nome da sua comunidade?"
                                />
                                <input name="image"
                                       placeholder="URL da imagem"
                                       aria-label="Image URL"
                                />
                                <button>Criar</button>
                            </form>
                        </Box>
                    </GridArea>
                    <GridArea
                        areaName="profileRelationsArea"
                        css={`
                          display: grid;
                          gap: ${common.GAP}
                        `}>
                        <FollowersBox items={followers} />
                        <RelationsBox items={favoritePersons} />
                        <CommunitiesBox items={communities} />
                    </GridArea>
                </MainGrid>
            </MainGridWrapper>
        </>
    )
}

const MainGrid = styled.main`
  max-width: 1110px;
  gap: ${common.GAP};
  padding: ${common.PADDING};
  flex: 1;
  display: flex;
  flex-direction: column;

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
