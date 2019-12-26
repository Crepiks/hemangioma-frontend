import React from 'react'
import styled from 'styled-components'
import Button from '../common/Button'
import technicsImage from '../../assets/images/technics.svg'

const Wrapper = styled.section`
    padding: 70px 0;
    display: flex;
    justify-content: center;

    @media all and (max-width: 800px) {
        flex-direction: column-reverse;
        align-items: center;
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

const Image = styled.img`
    width: 30%;
    margin-left: 50px;

    @media all and (max-width: 800px) {
        width: 50%;
        margin: 0;
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
        margin-top: 50px;
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
    width: 250px;
    margin-top: 20px;

    @media all and (max-width: 800px) {
        margin: 20px auto 0;
    }
`

const TechnicsSection = ({ className }) => {
    return (
        <Wrapper className={className}>
            <Column>
                <Title>Новейшее оборудование</Title>
                <Text>Диагностика и лечение сосудистых заболеваний с использованием высокотехнологичных медицинских методов</Text>
                <StyledButton>Как мы работаем</StyledButton>
            </Column>
            <Image src={technicsImage} alt="Компьютерная томография" />
        </Wrapper>
    )
}

export default TechnicsSection