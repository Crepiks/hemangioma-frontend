import React from 'react'
import styled from 'styled-components'
import SpecializationCard from './SpecializationCard'
import { faCoffee, faCapsules, faDiagnoses, faUserNurse, faHeartbeat, faUserMd, faXRay } from '@fortawesome/free-solid-svg-icons'

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
    height: 350px;
    width: 300px;
`


const SpecializationSection = ({ className }) => {
    return (
        <Wrapper>
            <Title>Наша специализация</Title>
            <Row>
                <StyledCard icon={faDiagnoses} title='Диагностика' text='Диагностика (клинический осмотр, УЗИ, МРТ, КТ) с возможностью использования наркоза' />
                <StyledCard icon={faCapsules} title='Медикаментозная терапия' text='Назначение медикаментозной терапии гемангиом (без хирургического вмешательства)' />
                <StyledCard icon={faHeartbeat} title='Сосудистые мальформации' text='Лечение сосудистых мальформаций внутрисосудистым (нетравматичным) методом' />
            </Row>
            <Row>
                <StyledCard icon={faUserMd} title='Амбулаторная хирургия' text='Амбулаторная хирургия (иссечение доброкачественных образований, в том числе сосудистых)' />
                <StyledCard icon={faXRay} title='Лазерная медицина' text='Лазерная медицина в лечении различных видов ангиодисплазий, опухолей (родимые пятна, невусы, папиломы, доброкачественные образования)' />
                <StyledCard icon={faUserNurse} title='Консервативная терапия' text='Наблюдение специалистов за пациентом до полного окончания курса лечения' />
            </Row>
        </Wrapper>
    )
}

export default SpecializationSection