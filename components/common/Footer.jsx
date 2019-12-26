import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'

const Wrapper = styled.footer`
    height: 350px;
    padding: 70px 10vw;
    background-color: #924E4E;
    box-sizing: border-box;
    color: #ffffff;
`

const StyledLogo = styled(Logo)`
    color: #ffffff;
`

const Footer = ({ className }) => (
    <Wrapper className={className}>
        <StyledLogo theme="light" />
    </Wrapper>
)

export default Footer