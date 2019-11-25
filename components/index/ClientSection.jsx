import React from 'react'
import styled from 'styled-components'
import clientImage from '../../assets/images/doctor_with_client.svg'

const Wrapper = styled.section`
    padding: 50px 0;
    display: flex;
    justify-content: center;
`

const Image = styled.img`
    height: 50vh;
    width: 35%;
`

const Column = styled.div`
    margin-left: 40px;
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
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

const ClientSection = ({ className }) => {
    return (
        <Wrapper>
            <Image src={clientImage} alt="Доктор с клиентом" />
            <Column>
                <Title>Lorem, ipsum.</Title>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptatum reprehenderit explicabo ab praesentium inventore?</Text>
            </Column>
        </Wrapper>
    )
}

export default ClientSection