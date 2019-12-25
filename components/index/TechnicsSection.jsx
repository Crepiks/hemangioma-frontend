import React from 'react'
import styled from 'styled-components'
import Button from '../common/Button'
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
    margin-left: 50px;
`

const Title = styled.h3`
    margin-bottom: 10px;
    font-family: 'Roboto Slab', serif;
    font-size: 30px;

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

const StyledButton = styled(Button)`
    width: 250px;
    margin-top: 20px;
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