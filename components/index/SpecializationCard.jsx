import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Wrapper = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
`

const StyledIcon = styled(FontAwesomeIcon)`
    width: 80px;
    color: #FF6161;
`

const Title = styled.h4`
    width: 80%;
    margin: 20px 0;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 22px;
`

const Text = styled.p`
    width: 80%;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
`

const Card = ({ className, icon, title, text }) => {
    return (
        <Wrapper className={className}>
            <StyledIcon icon={icon} />
            <Title>{ title }</Title>
            <Text>{ text }</Text>
        </Wrapper>
    )
}

export default Card