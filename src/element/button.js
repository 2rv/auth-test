import React from 'react'
import styled from 'styled-components'

export default function SubmitButton(props) {
    const{
        type,
        text,
        disabled,
    }=props
    return (
    <Container>
        <Button
            type={type}
            disabled={disabled}
        >{text}</Button>        
    </Container>
  )
}
const Container=styled.div`
    margin:15px 0;
`

const Button=styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 140px;
    gap: 10px;

    width: 345px;
    height: 46px;

    background: #F46F17;
    border-radius: 10px;
    outline:none;
    border:none;

    font-family: 'PT Root UI';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 100%;

    text-align: center;

    color: #FFFFFF;
`

