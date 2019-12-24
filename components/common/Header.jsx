import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import TopNav from './TopNav'

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

const Navigation = styled(TopNav)`
    width: 35vw;
    margin-left: 80px;
`

const Header = () => {
    return (
        <Wrapper>
            <Logo />
            <Navigation />
        </Wrapper>
    )
}

export default Header