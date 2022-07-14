import React from 'react'
import styled from 'styled-components'

export default function ErrorLable(props) {
  return (
    <Container>
        <Icon>!</Icon>
        <Lable>
          {props.text}
        </Lable>
    </Container>
  )
}

const Container=styled.div`
    display:flex;
    border:1px solid #FB6061;
    border-radius:10px;
    width: 345px;
    height: 36px;
    align-items:center;
`
const Lable=styled.span`
    font-family: 'PT Root UI';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #FB6061;
    
`

const Icon=styled.div`
    margin:0 16px;
    width:1.15em;
    font-size: 12px;
    border-radius:50%;
    text-align:center;
    color:white;
    background: #FB6061;
    
`