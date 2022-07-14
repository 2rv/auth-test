import React from 'react'
import styled from 'styled-components'

export default function RestorePassword(props) {
  return (
    <Container>
        <Text>
            {props.text} 
        </Text>
        <Link>
            {props.linkText}
        </Link>
    </Container>
  )
}

const Container=styled.div`
    display:flex;
    margin-top:25px;
`

const Text=styled.span`
    font-family: 'PT Root UI';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #888888;
`

const Link=styled.span`
    font-family: 'PT Root UI';
    font-weight: bold;
    text-decoration:underline;
    font-size: 14px;
    line-height: 150%;
    color: #F46F17;
`