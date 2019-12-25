import React from 'react'
import styled from 'styled-components'
import SpecializationCard from './SpecializationCard'
import { faCapsules, faDiagnoses, faUserNurse, faHeartbeat, faUserMd, faXRay } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.section`
    padding: 100px 0;
    width: 70%;
    margin: auto;
    box-sizing: border-box;
    color: #924E4E;

    @media all and (max-width: 900px) {
        width: 90%;
    }
`

const Title = styled.h2`
    width: 100%;
    text-align: center;
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

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    box-sizing: border-box;
`

const StyledCard = styled(SpecializationCard)`
    height: 350px;
    width: 300px;
    margin-top: 60px;
    
    @media all and (max-width: 950px) {
        height: 300px;
        width: 200px;
    }

    @media all and (max-width: 600px) {
        width: 150px;
        height: 200px;
    }
`


const SpecializationSection = ({ className }) => {
    return (
        <Wrapper>
            <Title>Мы специализируемся</Title>
            <Container>
                <StyledCard icon={faDiagnoses} title='Диагностика' text='Диагностика (клинический осмотр, УЗИ, МРТ, КТ) с возможностью использования наркоза' />
                <StyledCard icon={faCapsules} title='Медикаментозная терапия' text='Назначение медикаментозной терапии гемангиом (без хирургического вмешательства)' />
                <StyledCard icon={faHeartbeat} title='Сосудистые мальформации' text='Лечение сосудистых мальформаций внутрисосудистым (нетравматичным) методом' />
                <StyledCard icon={faUserMd} title='Амбулаторная хирургия' text='Амбулаторная хирургия (иссечение доброкачественных образований, в том числе сосудистых)' />
                <StyledCard icon={faXRay} title='Лазерная медицина' text='Лазерная медицина в лечении различных видов ангиодисплазий, опухолей (родимые пятна, невусы, папиломы, доброкачественные образования)' />
                <StyledCard icon={faUserNurse} title='Консервативная терапия' text='Наблюдение специалистов за пациентом до полного окончания курса лечения' />
            </Container>
        </Wrapper>
    )
}

export default SpecializationSection