import React from 'react'
import styled from 'styled-components'
import AnimatedBackground from '../common/AnimatedBackground'

const Wrapper = styled(AnimatedBackground)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Title = styled.h1`
    margin-bottom: 20px;
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
    font-size: 50px;
    text-align: center;
`

const Subtitle = styled.h3`
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
`

const Button = styled.button`
    margin-top: 30px;
    padding: 15px 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-size: 15px;
    font-weight: 700;
    background-color: #47B8FF;
    outline: none;
    border: none;
    cursor: pointer;
`

const IntroSection = () => {
    return (
        <Wrapper>
            <Title>Hemangioma.kz</Title>
            <Subtitle>Центр лечения гемангиомы и других кровеных заболеваний в Казахстане</Subtitle>
            <Button>Наши услуги</Button>
        </Wrapper>
    )
}

export default IntroSection