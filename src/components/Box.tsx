import React from 'react'
import styled, { CSSObject, CSSProp } from 'styled-components'
import { common } from '../styles/global.styled'

interface IBox {
    css?: CSSProp | CSSObject
}

interface IItem {
    html_url: string;
    avatar_url: string;
    login: string
}

const SimpleBox = ({
                       title,
                       titleSize,
                       children,
                       ...props
                   }: { title?: string, titleSize?: 'big' | 'normal', children?: React.ReactNode }) => {
    return (
        <div {...props}>
            {title && (
                titleSize === 'big' ?
                    <h1 className="title">{title}</h1> :
                    <h2 className="smallTitle">{title}</h2>
            )}
            {children}
        </div>
    )
}

const Box = styled(SimpleBox)<IBox>`
  background-color: #fff;
  border-radius: 8px;
  padding: ${common.PADDING};


  //  Copied from Alurakut Commons
  .boxLink {
    font-size: 14px;
    color: #2E7BB4;
    text-decoration: none;
    font-weight: 800;
  }

  .title {
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 20px;
  }

  .subTitle {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 20px;
  }

  .smallTitle {
    font-size: 16px;
    font-weight: 700;
    color: #333333;
    margin-bottom: 20px;
  }

  hr {
    margin-top: 12px;
    margin-bottom: 8px;
    border-color: transparent;
    border-bottom-color: #ECF2FA;
  }

  input {
    width: calc(100% - ${common.PADDING} * 2);
    background-color: #F4F4F4;
    color: #333333;
    border: 0;
    padding: ${common.PADDING};
    margin-bottom: 14px;
    border-radius: 10000px;

    ::placeholder {
      color: #333333;
      opacity: 1;
    }
  }

  button {
    border: 0;
    padding: 8px 12px;
    color: #FFFFFF;
    border-radius: 10000px;
    background-color: #6F92BB;
  }

`

export default Box
