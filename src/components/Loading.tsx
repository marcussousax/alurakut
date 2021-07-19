import React from 'react'
import styled from 'styled-components'
import { common } from '../styles/global.styled'

const Loading = styled.div<{ loading: boolean }>`
  position: fixed;
  backdrop-filter: blur(10px);
  border-radius: calc(${common.GAP} / 2);
  padding: calc(${common.GAP} * 3);
  background-color: ${({ theme }) => `${theme.white}AA`};
  right: ${common.GAP};
  bottom: ${common.GAP};
  left: ${common.GAP};
  z-index: 5;

  &:before {
    content: "Loading...";
  }
`

export default Loading
