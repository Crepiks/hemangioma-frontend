import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Wrapper = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid red;
`

const StyledIcon = styled(FontAwesomeIcon)`
    width: 100px;
    color: #FF6161;
`

const Title = styled.h4`
    margin: 10px 0;
    font-family: 'Roboto Slab', serif;
    font-weight: 400;
    font-size: 20px;
`

const Text = styled.p`
    width: 80%;
    text-align: center;
    font-family: 'Roboto', sans-serif;
`

const Card = ({ className, icon, title, text }) => {
    return (
        <Wrapper className={className}>
            <StyledIcon icon={icon} />
            <Title>l{ title }</Title>
            <Text>{ text }</Text>
        </Wrapper>
    )
}

export default Card