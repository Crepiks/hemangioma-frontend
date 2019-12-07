import React from 'react'
import styled from 'styled-components'
import clientImage from '../../assets/images/doctor_with_client.svg'

const Wrapper = styled.section`
    padding: 50px 0;
    display: flex;
    justify-content: center;
`

const Image = styled.img`
    height: 50vh;
    width: 35%;
`

const Column = styled.div`
    margin-left: 40px;
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Title = styled.h3`
    margin-bottom: 20px;
    font-family: 'Roboto Slab', serif;
    font-size: 36px;
    font-weight: 400;

    @media all and (max-width: 1000px) {
        font-size: 30px;
    }
`

const Text = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 20px;

    @media all and (max-width: 1000px) {
        font-size: 18px;
    }
`

const ClientSection = ({ className }) => {
    return (
        <Wrapper>
            <Image src={clientImage} alt="Доктор с клиентом" />
            <Column>
                <Title>Мы заботимся о пациентах</Title>
                <Text>Наблюдение специалистов за пациентом до полного окончания курса</Text>
            </Column>
        </Wrapper>
    )
}

export default ClientSection