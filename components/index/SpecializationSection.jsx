import React from 'react'
import styled from 'styled-components'
import SpecializationCard from './SpecializationCard'

const Wrapper = styled.section`
    padding: 50px 0;
    width: 70%;
    margin: auto;
    box-sizing: border-box;
`

const Title = styled.h2`
    width: 100%;
    margin-bottom: 50px;
    text-align: center;
    font-family: 'Roboto Slab', serif;
    font-size: 25px;
    font-weight: 400;
`

const Row = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
`

const StyledCard = styled(SpecializationCard)`
    height: 300px;
    width: 18vw;
`

const SpecializationSection = ({ className }) => {
    return (
        <Wrapper>
            <Title>Наша специализация</Title>
            <Row>
                <StyledCard />
                <StyledCard />
                <StyledCard />
            </Row>
        </Wrapper>
    )
}

export default SpecializationSection