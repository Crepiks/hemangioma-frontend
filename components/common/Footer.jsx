import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Link from 'next/link'

const Wrapper = styled.footer`
    height: 350px;
    padding: 70px 10vw;
    display: flex;
    justify-content: space-between;
    background-color: #924E4E;
    box-sizing: border-box;
    color: #FFE8E8;

    @media all and (max-width: 800px) {
        height: auto;
        flex-direction: column;
    }
`

const Column = styled.div`
    display: flex;
    flex-direction: column;

    @media all and (max-width: 800px) {
        margin-bottom: 30px;
    }
`

const StyledLogo = styled(Logo)`
    color: #ffffff;
`

const Title = styled.h4`
    margin-bottom: 15px;
    font-family: 'Roboto Slab', serif;
    font-size: 24px;
    font-weight: 400;
`

const StyledLink = styled.a`
    margin-bottom: 5px;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
`

const Text = styled.span`
    margin-bottom: 5px;
    font-family: 'Roboto', sans-serif;
`

const Footer = ({ className }) => (
    <Wrapper className={className}>
        <Column>
            <Link href="/"><a><StyledLogo theme="light" /></a></Link>
        </Column>
        <Column>
            <Title>Ссылки</Title>
            <StyledLink href="#">О нас</StyledLink>
            <StyledLink href="#">Галерея</StyledLink>
            <StyledLink href="#">Контакты</StyledLink>
        </Column>
        <Column>
            <Title>Контакты</Title>
            <Text>Адрес: <Link>г.Алматы, Абая 160, 6</Link></Text>
            <Text>Телефон: <Link>+7 707 507 75 96</Link></Text>
        </Column>
    </Wrapper>
)

export default Footer