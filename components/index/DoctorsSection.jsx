import React from 'react'
import styled from 'styled-components'
import Button from '../common/Button'
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
    width: 30%;

    @media all and (max-width: 800px) {
        width: 50%;
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
    margin-bottom: 10px;
    font-family: 'Roboto Slab', serif;
    font-size: 30px;
    line-height: 1;

    @media all and (max-width: 1200px) {
        font-size: 30px;
    }

    @media all and (max-width: 900px) {
        font-size: 26px;
    }

    @media all and (max-width: 800px) {
        margin-top: 30px;
        text-align: center;
    }

    @media all and (max-width: 600px) {
        font-size: 22px;
    }
`

const Text = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 20px;

    @media all and (max-width: 1200px) {
        font-size: 16px;
    }

    @media all and (max-width: 800px) {
        text-align: center;
    }
`

const StyledButton = styled(Button)`
    width: 200px;
    margin-top: 20px;

    @media all and (max-width: 800px) {
        margin: 20px auto 0;
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
                <StyledButton>Наши врачи</StyledButton>
            </Column>
        </Wrapper>
    )
}

export default DoctorsSection