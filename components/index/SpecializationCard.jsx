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
`

const StyledIcon = styled(FontAwesomeIcon)`
    width: 80px;
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