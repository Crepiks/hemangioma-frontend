import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/images/logo.svg'
import logo_light from '../../assets/images/logo_light.svg'

const Column = styled.div`
    margin-left: 10px;
    display: flex;
    flex-direction: column;
`

const Name = styled.span`
    font-family: 'Roboto Slab', serif;
    font-size: 20px;
    font-weight: bold;

    @media all and (max-width: 450px) {
        font-size: 18px;
    }
`

const Subname = styled.span`
    font-family: 'Roboto', sans-serif;
    font-size: 10px;
    font-weight: bold;
`

const Logo = ({ className, theme }) => {

    const Wrapper = styled.div`
        display: flex;
        align-items: center;
        color: ${theme === 'light' ? '#FFE8E8' : '#924E4E'};
    `

    const Image = styled.img`
        width: 50px;

        @media all and (max-width: 450px) {
            width: 40px;
        }
    `

    return (
        <Wrapper className={className}>
            <Image src={theme === 'light' ? logo_light : logo} alt="Логотип" />
            <Column>
                <Name>Hemnagioma.kz</Name>
                <Subname>Основано в 2019</Subname>
            </Column>
        </Wrapper>
    )
}

export default Logo