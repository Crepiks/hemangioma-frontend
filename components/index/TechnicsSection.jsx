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
`

const Title = styled.h3`
    margin-bottom: 20px;
    font-family: 'Roboto Slab', serif;
    font-size: 36px;
    font-weight: 400;
`

const Text = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
`

const TechnicsSection = ({ className }) => {
    return (
        <Wrapper>
            <Column>
                <Title>Lorem, ipsum dolor.</Title>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, harum!</Text>
            </Column>
            <Image src={technicsImage} alt="Компьютерная томография" />
        </Wrapper>
    )
}

export default TechnicsSection