import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import TopNav from './TopNav'
import Link from 'next/link'

const Wrapper = styled.header`
    width: 100%;
    height: 80px;
    padding: 0 10vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
`

const Navigation = styled(TopNav)`
    width: 35vw;

    @media all and (max-width: 1300px) {
        width: 45vw;
    }

    @media all and (max-width: 1050px) {
        width: 50vw;
    }
`

const Header = () => {
    return (
        <Wrapper>
            <Link href="/"><a><Logo /></a></Link>
            <Navigation />
        </Wrapper>
    )
}

export default Header