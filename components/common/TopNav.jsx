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
    font-family: 'Roboto', sans-serif;
    cursor: pointer
`

const TopNav = ({ className }) => {
    return (
        <Wrapper className={className}>
            <StyledLink>Home</StyledLink>
            <StyledLink>About</StyledLink>
            <StyledLink>Gallery</StyledLink>
            <StyledLink>Contact</StyledLink>
            <StyledLink>Doctors</StyledLink>
        </Wrapper>
    )
}

export default TopNav