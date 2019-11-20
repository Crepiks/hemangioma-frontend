import React from 'react'
import styled from 'styled-components'
import TopNav from './TopNav'
import LanguageSelect from './LanguageSelect'
import logo from '../../assets/images/logo.svg'

const Wrapper = styled.header`
    width: 100%;
    height: 80px;
    padding: 0 5vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0 5px rgba(0,0,0,0.3);
    box-sizing: border-box;
`

const Row = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`

const Image = styled.img`
    height: 60%;
`

const Navigation = styled(TopNav)`
    width: 35vw;
    margin-left: 80px;
`

const StyleLanguageSelect = styled(LanguageSelect)`
`

const Header = () => {
    return (
        <Wrapper>
            <Row>
                <Image src={logo} alt="Логотип" />
                <Navigation />
            </Row>
            <StyleLanguageSelect />
        </Wrapper>
    )
}

export default Header