import React from 'react'
import styled from 'styled-components'
import technicsImage from '../../assets/images/technics.svg'

const Wrapper = styled.section`
    padding: 50px 0;
    display: flex;
    justify-content: center;
`

const Column = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Image = styled.img`
    height: 50vh;
    width: 30%;
    margin-left: 20px;
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

const TechnicsSection = ({ className }) => {
    return (
        <Wrapper>
            <Column>
                <Title>Новейшее оборудование</Title>
                <Text>Диагностика и лечение сосудистых заболеваний с использованием высокотехнологичных медицинских методов</Text>
            </Column>
            <Image src={technicsImage} alt="Компьютерная томография" />
        </Wrapper>
    )
}

export default TechnicsSection