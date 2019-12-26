import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'

const Wrapper = styled.footer`
    height: 350px;
    padding: 70px 10vw;
    display: flex;
    justify-content: space-between;
    background-color: #924E4E;
    box-sizing: border-box;
    color: #ffffff;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
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

const Link = styled.a`
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
            <StyledLogo theme="light" />
        </Column>
        <Column>
            <Title>Ссылки</Title>
            <Link href="#">Главная</Link>
            <Link href="#">О нас</Link>
            <Link href="#">Галерея</Link>
            <Link href="#">Конакты</Link>
        </Column>
        <Column>
            <Title>Контакты</Title>
            <Text>Адрес: <Link>г.Алматы, Абая 160, 6</Link></Text>
            <Text>Телефон: <Link>+7 707 507 75 96</Link></Text>
        </Column>
    </Wrapper>
)

export default Footer