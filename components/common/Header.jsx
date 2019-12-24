import React from 'react'
import styled from 'styled-components'
import TopNav from './TopNav'
import logo from '../../assets/images/logo.svg'

const Wrapper = styled.header`
    width: 100%;
    height: 80px;
    padding: 0 10vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0 5px rgba(0,0,0,0.3);
    box-sizing: border-box;
`

const Image = styled.img`
    height: 60%;
`

const Navigation = styled(TopNav)`
    width: 30vw;
    margin-left: 80px;
`

const Header = () => {
    return (
        <Wrapper>
            <Image src={logo} alt="Логотип" />
            <Navigation />
        </Wrapper>
    )
}

export default Header