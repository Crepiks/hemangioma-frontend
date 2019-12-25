import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/images/logo.svg'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`

const Image = styled.img`
    width: 50px;

    @media all and (max-width: 450px) {
        width: 40px;
    }
`

const Column = styled.div`
    margin-left: 10px;
    display: flex;
    flex-direction: column;
`

const Name = styled.span`
    color: #924E4E;
    font-family: 'Roboto Slab', serif;
    font-size: 20px;
    font-weight: bold;

    @media all and (max-width: 450px) {
        font-size: 18px;
    }
`

const Subname = styled.span`
    color: #924E4E;
    font-family: 'Roboto', sans-serif;
    font-size: 10px;
    font-weight: bold;
`

const Logo = ({ className }) => (
    <Wrapper>
        <Image src={logo} alt="Логотип" />
        <Column>
            <Name>Hemnagioma.kz</Name>
            <Subname>Основано в 2019</Subname>
        </Column>
    </Wrapper>
)

export default Logo