import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const Wrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledLink = styled.a`
    font-size: 16px;
    font-weight: 400;
    color: #924E4E;
    font-family: 'Roboto Slab', serif;
    cursor: pointer
`

const StyledButton = styled(Button)`
    font-size: 13px;
`

const TopNav = ({ className }) => {
    return (
        <Wrapper className={className}>
            <StyledLink>Главная</StyledLink>
            <StyledLink>О нас</StyledLink>
            <StyledLink>Галерея</StyledLink>
            <StyledLink>Конакты</StyledLink>
            <StyledButton>Записаться на прием</StyledButton>
        </Wrapper>
    )
}

export default TopNav