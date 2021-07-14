import React from 'react'
import styled from 'styled-components'

interface IHeader {

}

const Header: React.FC<IHeader> = (props) => {
    return (
        <HeaderRoot>
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
                    <li>seuemail@email.com.br</li>
                    <li><a href="">Sair</a></li>
                </ul>
            </UserMenu>
            <AppSearch placeholder="Pesquisar no Orkut" />
        </HeaderRoot>
    )
}

export default Header

const HeaderRoot = styled.header`
  background-color: ${({ theme }) => theme.blue1};
  color: ${({ theme }) => theme.blue3};
  display: grid;
  align-items: center;
  gap: 10px;
  padding: 16px;
  @media (min-width: 860px) {
    grid-template-columns: 100px 1fr 200px 200px;
    min-height: calc(48px - 32px);
  }

  a {
    color: ${({ theme }) => theme.white};
  }
`
const AppMenu = styled.menu`
  ul {
    display: flex;
  }
`
const UserMenu = styled.menu`
  ul {
    display: flex;
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
