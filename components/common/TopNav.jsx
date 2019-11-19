import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledLink = styled.a`
    font-weight: 400;
    color: #AAABAD;
`

const TopNav = () => {
    return (
        <Wrapper>
            <StyledLink>Home</StyledLink>
            <StyledLink>About</StyledLink>
            <StyledLink>Gallery</StyledLink>
            <StyledLink>Contact</StyledLink>
            <StyledLink>Doctors</StyledLink>
        </Wrapper>
    )
}

export default TopNav