import React from 'react'
import styled from 'styled-components'
import { common } from '../styles/global.styled'
import Image from 'next/image'

interface IListItem {
    id?: string
    creatorSlug?: string
    html_url?: string
    url?: string
    imageURL?: string
    avatar_url?: string
    displayName?: string
    login?: string
}

interface IList {
    items: IListItem[]
    remappedKeys?: IListItem
}

/*
By default List will expect an specific API structure, there will be cases that we will need to remap the keys.
Followers and Following boxes, receives a Github JSON, but communities receive a DatoCMS JSON.
 */
function List({ items, remappedKeys }: IList) {

    if (!items.length) {
        return <p>Loading</p>
    }
    return (
        <List.Wrapper>
            {items.map((item, index) => (
                <li key={item.id}>
                    <a rel="noreferrer"
                       href={`${remappedKeys ? item[remappedKeys['displayName']].split(' ').join('-').toLowerCase() : item.html_url}`}
                       target="_blank">
                        <Image src={`${remappedKeys ? item[remappedKeys['imageURL']] : item.avatar_url}`}
                               alt={`${remappedKeys ? item[remappedKeys['displayName']] : item.login}`}
                               width={460}
                               height={460}
                        />
                        <span>{remappedKeys ? item[remappedKeys['displayName']] : item.login}</span>
                    </a>
                </li>
            ))}
        </List.Wrapper>
    )
}

List.Wrapper = styled.ul`

  display: grid;
  grid-gap: ${common.GAP};
  grid-template-columns: 1fr 1fr 1fr;
  //max-height: 220px;
  max-height: none;
  list-style: none;


  img {
    object-fit: cover;
    background-position: center center;
    width: 100%;
    height: 100%;
    position: relative;
  }

  li a {
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

export default List
