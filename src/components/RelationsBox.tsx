import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import Box from './Box'
import { common } from '../styles/global.styled'

export interface IRelationsBox {
    items: Record<string, boolean | string | number | undefined>[]
}

const RelationsBox = ({ items }: IRelationsBox) => {
    return (
        <RelationsBox.Wrapper>
            <h2 className="smallTitle">Meus amigos ({items.length})</h2>
            <ul>
                {items.map((person, index) => (
                    <li key={index}>
                        <a rel="noreferrer" href={`${person.html_url}`} target="_blank">
                            <Image src={`${person.avatar_url}`}
                                   alt={`${person.login} avatar`}
                                   width={460}
                                   height={460}
                            />
                            <span>{person.login}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </RelationsBox.Wrapper>
    )
}
RelationsBox.Wrapper = styled(Box)`
  ul {
    display: grid;
    grid-gap: ${common.GAP};
    grid-template-columns: 1fr 1fr 1fr;
    //max-height: 220px;
    max-height: none;
    list-style: none;
  }

  img {
    object-fit: cover;
    background-position: center center;
    width: 100%;
    height: 100%;
    position: relative;
  }

  ul li a {
    display: inline-block;
    height: 102px;
    position: relative;
    overflow: hidden;
    border-radius: 8px;

    span {
      color: #FFFFFF;
      font-size: 10px;
      position: absolute;
      left: 0;
      bottom: 10px;
      z-index: 2;
      padding: 0 4px;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }

    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-indeX: 1;
      background-image: linear-gradient(0deg, #00000073, transparent);
    }
  }
`

export default RelationsBox
