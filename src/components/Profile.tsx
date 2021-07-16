import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { AlurakutProfileSidebarMenuDefault } from '../lib/AlurakutCommons'
import { media } from '../styles/global.styled'
import Box from './Box'

function Profile(props: { user: string }) {

    const { user } = props

    return (
        <Profile.Box as="aside">
            <Image
                src={`https://github.com/${user}.png`}
                alt={`${user} avatar`}
                width={460}
                height={460}
            />
            <hr />
            <p>
                <a className="boxLink" href={`https://github.com/${user}`}>
                    @{user}
                </a>
            </p>
            <hr />
            <AlurakutProfileSidebarMenuDefault />
        </Profile.Box>
    )
}

Profile.Box = styled(Box)`
  padding: 10px;
  display: none;

  ${media.large} {
    display: block;
  }
`
export default Profile
