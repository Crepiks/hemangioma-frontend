import React from 'react'
import styled from 'styled-components'
import Button from '../common/Button'
import doctor_with_client from '../../assets/images/doctor_with_client.svg'

const Wrapper = styled.section`
    width: 80%;
    height: 80vh;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #924E4E;
    font-family: 'Roboto Slab', sans-serif;

    @media all and (max-width: 800px) {
        flex-direction: column-reverse;
        justify-content: center;
    }
`

const Column = styled.div`
    width: 45%;
    box-sizing: border-box;

    @media all and (max-width: 900px) {
        width: 40%;
    }

    @media all and (max-width: 800px) {
        width: 80%;
    }

    @media all and (max-width: 500px) {
        width: 90%;
    }
`

const Title = styled.h1`
    font-size: 38px;
    line-height: 1;

    @media all and (max-width: 1200px) {
        font-size: 30px;
    }

    @media all and (max-width: 900px) {
        font-size: 26px;
    }

    @media all and (max-width: 800px) {
        margin-top: 30px;
        font-size: 30px;
        text-align: center;
    }

    @media all and (max-width: 600px) {
        font-size: 22px;
    }
`

const Subtitle = styled.h2`
    margin-top: 20px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 20px;

    @media all and (max-width: 1200px) {
        font-size: 16px;
    }

    @media all and (max-width: 800px) {
        font-size: 16px;
        text-align: center;
    }
`

const StyledButton = styled(Button)`
    margin-top: 30px;
    padding: 15px 30px;

    @media all and (max-width: 1200px) {
        margin: 20px auto 0;
    }
`

const Image = styled.img`
    width: 50%;

    @media all and (max-width: 900px) {
        width: 60%;
    }

    @media all and (max-width: 800px) {
        width: 80%;
    }

    @media all and (max-width: 500px) {
        width: 100%;
    }
`

const Intro = ({ className }) => (
    <Wrapper className={className}>
        <Column>
            <Title>#1 центр лечения гемангиомы в Казахстане</Title>
            <Subtitle>Hemangioma.kz - ведущий центр лечения гемангиомы и других кровеных заболеваний в Казахстане</Subtitle>
            <StyledButton>Наши услуги</StyledButton>
        </Column>
        <Image src={doctor_with_client} alt="Доктор с клиентом" />
    </Wrapper>
)

export default Intro