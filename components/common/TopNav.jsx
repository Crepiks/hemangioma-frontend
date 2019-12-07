import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledLink = styled.a`
    font-weight: 400;
    color: #AAABAD;
    font-family: 'Roboto Slab', serif;
    cursor: pointer
`

const TopNav = ({ className }) => {
    return (
        <Wrapper className={className}>
            <StyledLink>Главная</StyledLink>
            <StyledLink>О нас</StyledLink>
            <StyledLink>Галерея</StyledLink>
            <StyledLink>Конакты</StyledLink>
        </Wrapper>
    )
}

export default TopNav