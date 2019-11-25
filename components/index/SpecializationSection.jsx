import React from 'react'
import styled from 'styled-components'
import SpecializationCard from './SpecializationCard'
import { faMicrochip, faCoffee } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.section`
    padding: 100px 0;
    width: 70%;
    margin: auto;
    box-sizing: border-box;
`

const Title = styled.h2`
    width: 100%;
    margin-bottom: 50px;
    text-align: center;
    font-family: 'Roboto Slab', serif;
    font-size: 30px;
    font-weight: 400;
`

const Row = styled.div`
    width: 100%;
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
`

const StyledCard = styled(SpecializationCard)`
    height: 300px;
    width: 300px;
`


const SpecializationSection = ({ className }) => {
    return (
        <Wrapper>
            <Title>Наша специализация</Title>
            <Row>
                <StyledCard icon={faMicrochip} title='Новейшее оборудование' text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, obcaecati?' />
                <StyledCard icon={faCoffee} title='Новейшее оборудование' text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, obcaecati?' />
                <StyledCard icon={faCoffee} title='Новейшее оборудование' text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, obcaecati?' />
            </Row>
            <Row>
                <StyledCard icon={faCoffee} title='Новейшее оборудование' text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, obcaecati?' />
                <StyledCard icon={faCoffee} title='Новейшее оборудование' text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, obcaecati?' />
                <StyledCard icon={faCoffee} title='Новейшее оборудование' text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, obcaecati?' />
            </Row>
        </Wrapper>
    )
}

export default SpecializationSection