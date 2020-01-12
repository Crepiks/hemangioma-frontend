import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import Link from 'next/link'
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

const StyledLink = styled(Link)`
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

const MobileNavigationContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FFE8E8;
    box-sizing: border-box;
    display: none;

`

const StyledMobileLink = styled(Link)`
    font-size: 24px;
    font-weight: 400;
    color: #924E4E;
    font-family: 'Roboto Slab', serif;
    cursor: pointer;

    @media all and (min-width: 950px) {
        display: none;
    }
`

const TopNav = ({ className }) => {
    return (
        <Wrapper className={className}>
            <MobileNavigationContainer>
                <StyledMobileLink href="#"><a>О нас</a></StyledMobileLink>
                <StyledMobileLink href="#"><a>Галерея</a></StyledMobileLink>
                <StyledMobileLink href="#"><a>Контакты</a></StyledMobileLink>
                <StyledMobileLink href="#"><a>Записаться на прием</a></StyledMobileLink>
            </MobileNavigationContainer>
            <StyledLink href="#"><a>О нас</a></StyledLink>
            <StyledLink href="#"><a>Галерея</a></StyledLink>
            <StyledLink href="#"><a>Контакты</a></StyledLink>
            <StyledButton>Записаться на прием</StyledButton>
            <StyledBurgerIcon icon={faBars} />
        </Wrapper>
    )
}

export default TopNav