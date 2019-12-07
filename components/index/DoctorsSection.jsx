import React from 'react'
import styled from 'styled-components'
import doctorsImage from '../../assets/images/doctors.svg'

const Wrapper = styled.section`
    padding: 50px 0;
    display: flex;
    justify-content: center;
    box-sizing: border-box;

    @media all and (max-width: 800px) {
        flex-direction: column;
        align-items: center;
    }
`

const Image = styled.img`
    margin-right: 20px;
    height: 50vh;
    width: 40%;

    @media all and (max-width: 800px) {
        heigth: 40vh;
        width: 70%;
    }
`

const Column = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media all and (max-width: 800px) {
        width: 80%;
    }
`

const Title = styled.h3`
    margin-bottom: 20px;
    font-family: 'Roboto Slab', serif;
    font-size: 36px;
    font-weight: 400;

    @media all and (max-width: 1000px) {
        font-size: 30px;
    }

    @media all and (max-width: 800px) {
        margin-top: 40px;
        text-align: center;
    }
`

const Text = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 20px;

    @media all and (max-width: 1000px) {
        font-size: 18px;
    }

    @media all and (max-width: 800px) {
        text-align: center;
    }
`

const DoctorsSection = ({ className }) => {
    return (
        <Wrapper className={className}>
            <Image src={doctorsImage} alt="Врачи" />
            <Column>
                <Title>Профессиональные врачи</Title>
                <Text>
                    Наши специалисты имеют коллосальный опыт работы в лечении сосудистых заболеваний
                </Text>
            </Column>
        </Wrapper>
    )
}

export default DoctorsSection