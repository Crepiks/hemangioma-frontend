import React from 'react'
import styled from 'styled-components'
import Button from '../common/Button'
import doctor_with_client from '../../assets/images/doctor_with_client.svg'

const Wrapper = styled.section`
    width: 80%;
    height: 80vh;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #924E4E;
    font-family: 'Roboto Slab', sans-serif;
`

const Column = styled.div`
    width: 45%;
    box-sizing: border-box;
`

const Title = styled.h1`
    font-size: 38px;
    line-height: 1;
`

const Subtitle = styled.h2`
    margin-top: 20px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 20px;
`

const StyledButton = styled(Button)`
    margin-top: 30px;
    padding: 15px 30px;
`

const Image = styled.img`

`

const Intro = ({ className }) => (
    <Wrapper className={className}>
        <Column>
            <Title>#1 центр лечения гемангиомы в Казахстане</Title>
            <Subtitle>Hemangioma.kz - ведущий центр лечения гемангиомы и других кровеных заболеваний в Казахстане</Subtitle>
            <StyledButton>Наши услуги</StyledButton>
        </Column>
        <Column>
            <Image src={doctor_with_client} alt="Доктор с клиентом" />
        </Column>
    </Wrapper>
)

export default Intro