import React from 'react'
import styled from 'styled-components'
import { media } from '../styles/global.styled'

interface IHeader {
    user: string
}

function Header({ user }: IHeader) {
    return (
        <>
            <Header.Wrapper>
                <h1><a href="#">Alurakut</a></h1>
                <AppMenu>
                    <ul>
                        <li><a href="">Início</a></li>
                        <li><a href="">Perfil</a></li>
                        <li><a href="">Página de recados</a></li>
                        <li><a href="">Amigos</a></li>
                        <li><a href="">Comunidades</a></li>
                    </ul>
                </AppMenu>
                <UserMenu>
                    <ul>
                        <li>{user}</li>
                        <li><a href="">Sair</a></li>
                    </ul>
                </UserMenu>
                <AppSearch placeholder="Pesquisar no Orkut" />
            </Header.Wrapper>
        </>
    )
}

Header.Wrapper = styled.header`
  background-color: ${({ theme }) => theme.blue1};
  color: ${({ theme }) => theme.blue3};
  display: grid;
  align-items: center;
  gap: 10px;
  padding: 16px;

  ${media.large} {
    grid-template-columns: 100px 1fr 200px 200px;
    min-height: calc(48px - 32px);
  }

  a {
    color: ${({ theme }) => theme.white};
  }
`

export default Header


const AppMenu = styled.menu`

  ${media.large} {
    ul {
      display: flex;
    }
  }

`
const UserMenu = styled.menu`
  ${media.large} {
    ul {
      display: flex;
    }
  }
`
const AppSearch = styled.input<React.InputHTMLAttributes<any>>`
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.blue5};
  border-radius: 35px;
  border: none;

  &::placeholder {
    color: inherit;
  }
`
