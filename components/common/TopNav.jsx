import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media all and (max-width: 975px) {
        justify-content: flex-end;
    }
`

const StyledLink = styled.a`
    font-size: 16px;
    font-weight: 400;
    color: #924E4E;
    font-family: 'Roboto Slab', serif;
    cursor: pointer;

    @media all and (max-width: 975px) {
        display: none;
    }
`

const StyledButton = styled(Button)`
    font-size: 13px;

    @media all and (max-width: 975px) {
        display: none;
    }
`

const StyledBurgerIcon = styled(FontAwesomeIcon)`
    height: 30px;
    width: 30px;
    display: none;
    cursor: pointer;

    @media all and (max-width: 975px) {
        display: block;
    }
`

const TopNav = ({ className }) => {
    return (
        <Wrapper className={className}>
            <StyledLink>Главная</StyledLink>
            <StyledLink>О нас</StyledLink>
            <StyledLink>Галерея</StyledLink>
            <StyledLink>Конакты</StyledLink>
            <StyledButton>Записаться на прием</StyledButton>
            <StyledBurgerIcon icon={faBars} />
        </Wrapper>
    )
}

export default TopNav