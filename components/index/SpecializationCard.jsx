import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Wrapper = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 500ms;
    border: 1px solid transparent;

    &:hover {
        border: 1px solid #924E4E;
    }

    @media all and (max-width: 950px) {
        &:hover {
            border: 1px solid transparent;
        }
    }
`

const StyledIcon = styled(FontAwesomeIcon)`
    width: 80px;

    @media all and (max-width: 950px) {
        width: 60px;
    }

    @media all and (max-width: 600px) {
        width: 45px;
    }
`

const Title = styled.h4`
    width: 80%;
    margin: 20px 0;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 22px;

    @media all and (max-width: 950px) {
        font-size: 18px;
    }

    @media all and (max-width: 600px) {
        font-size: 14px;
    }
`

const Text = styled.p`
    width: 80%;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;

    @media all and (max-width: 950px) {
        font-size: 14px;
    }

    @media all and (max-width: 600px) {
        font-size: 10px;
    }
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