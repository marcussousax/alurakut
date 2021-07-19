import { OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import Box from '../src/components/Box'
import GridArea from '../src/components/GridArea'
import Header from '../src/components/Header'
import { common, media } from '../src/styles/global.styled'
import React from 'react'
import Profile from '../src/components/Profile'
import RelationsBox from '../src/components/RelationsBox'
import CommunitiesBox from '../src/components/CommunitiesBox'
import FollowersBox from '../src/components/FollowersBox'
import styled from 'styled-components'
import nookies from 'nookies'
import jwt from 'jsonwebtoken'
import { NextApiRequest, NextPageContext } from 'next'

export interface ICommunity {
    creatorSlug: string
    id: string
    imageUrl: string
    title: string
}

export default function Home(props: { githubUser: string }) {
    const { githubUser } = props

    const user = githubUser
    const [favoritePersons, setFavoritePersons] = React.useState([])

    const [communities, setCommunities] = React.useState<ICommunity[]>([])

    const [followers, setFollowers] = React.useState([])

    function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
        ev.preventDefault()
        const formData = new FormData(ev.target as HTMLFormElement)

        fetch('/api/communities', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                creatorSlug: user,
                title: formData.get('title'),
                imageUrl: formData.get('image')
            })
        })
            .then(async res => {
                const newRecord = await res.json()
                setCommunities([...communities, newRecord.record])
                console.log(newRecord.record)
            })
    }

    React.useEffect(() => {
            fetch(`https://api.github.com/users/${user}/following`)
                .then((res) => {
                    if (res.ok) {
                        return res.json()
                    }
                    throw new Error(`Error on Req -> ${res}`)
                })
                .then((res) => setFavoritePersons(res))
                .catch((err) => console.error(err))

            fetch(`https://api.github.com/users/${user}/followers`)
                .then((res) => {
                    if (res.ok) {
                        return res.json()
                    }
                    throw new Error(`Error on Req -> ${res}`)
                })
                .then((res) => setFollowers(res))
                .catch((err) => console.error(err))

            fetch('https://graphql.datocms.com/', {
                method: 'POST',
                headers: {
                    'Authorization': process.env.DATOCMS_TOKEN!,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    query:
                        `query {
                        allCommunities(filter: {creatorSlug: {eq: "${user}"}}) {
                            id
                            title
                            creatorSlug
                            imageUrl
                        }
                    }`
                })
            })
                .then(async (res) => {
                    const response = await res.json()
                    setCommunities(response.data.allCommunities)
                })
                .catch((err) => console.error(err))
        }, [user]
    )

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
                                onSubmit={(ev) => handleSubmit(ev)}>
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

export async function getServerSideProps(context: Pick<NextPageContext, 'req'> | { req: NextApiRequest } | { req: any } | null | undefined) {

    const cookies = nookies.get(context)
    const token = jwt.decode(cookies.USER_TOKEN)

    const { isAuthenticated } = await fetch('https://alurakut.vercel.app/api/auth', {
        headers: {
            Authorization: cookies.USER_TOKEN
        }
    }).then(res => res.json())
    console.log({ isAuthenticated })

    if (!isAuthenticated) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }

    return {
        props: {
            // @ts-ignore
            githubUser: token.githubUser
        }, // will be passed to the page component as props
    }
}
