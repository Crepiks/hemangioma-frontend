import React from 'react'
import styled from 'styled-components'
import TopNav from './TopNav'
import logo from '../../assets/images/logo.svg'

const Wrapper = styled.header`
    width: 100%;
    height: 80px;
    padding: 0 5vw;
    display: flex;
    align-items: center;
    border: 1px solid red;
    box-sizing: border-box;
`

const Image = styled.img`
    height: 70%;
`

const Navigation = styled.nav`

`

const Header = () => {
    return (
        <Wrapper>
            <Image src={logo} alt="Логотип" />
            <TopNav />
        </Wrapper>
    )
}

export default Header