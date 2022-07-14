import styled from 'styled-components'
import React from 'react'
import { useTranslation } from "react-i18next";
import '../utils/i18next'


export default function FormInput(props) {
    const{
        title,
        name,
        placeholder,
        onChange,
        onBlur,
        value,
        error,
        type
    }=props
    const {t}=useTranslation()
    return (
    <Container>
        <Title>
            {title}
        </Title>
        <Input
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            value={value} 
        />
        {error &&<ErrorMessage>{t(error)}</ErrorMessage>}

    </Container>
  )
}
const Container=styled.div`
    margin-bottom:10px;
`
const Title=styled.span`
    font-family: 'PT Root UI', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
`



const ErrorMessage=styled.span`
    font-family: 'PT Root UI', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    color: #FB6061;

`

const Input=styled.input`
    box-sizing: border-box;
    margin:5px 0;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 16px;
    gap: 16px;

    width: 345px;
    height: 46px;

    background: #F7F7F7;
    border: 1px solid #FB6061;
    border-radius: 10px;

    ::placeholder {
        font-family: 'PT Root UI', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 100%;
        color: #FB6061;
      }
    :focus {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 16px;
        gap: 16px;
        width: 345px;
        height: 46px;
        background: #F7F7F7;
        outline: none;
        border:none;
        border-radius: 10px;
    }
`