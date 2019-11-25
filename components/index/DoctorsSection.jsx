import React from 'react'
import styled from 'styled-components'
import doctorsImage from '../../assets/images/doctors.svg'

const Wrapper = styled.section`
    padding: 100px 0;
    display: flex;
    justify-content: center;
`

const Image = styled.img`
    height: 50vh;
    width: 40%;
`

const Column = styled.div`
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

const TextBlock = styled.p`
    display: flex;
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
`

const DoctorsSection = ({ className }) => {
    return (
        <Wrapper className={className}>
            <Image src={doctorsImage} alt="Врачи" />
            <Column>
                <Title>Lorem, ipsum dolor.</Title>
                <TextBlock>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam earum, exercitationem necessitatibus optio laborum ab? Perspiciatis placeat magnam minus consequatur?
                </TextBlock>
            </Column>
        </Wrapper>
    )
}

export default DoctorsSection