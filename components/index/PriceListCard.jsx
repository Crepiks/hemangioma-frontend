import React from 'react'
import styled from 'styled-components'
import wavedBackground from '../../assets/images/wave_background.svg'

const Wrapper = styled.article`
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
`

const Title = styled.h3`
    min-height: 80px;
    padding: 20px 30px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: #ffffff;
    background-image: url(${wavedBackground});
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 10px 10px 0 0;
`

const PriceListCard = ({ className, title }) => {
    return (
        <Wrapper className={className}>
            <Title>{title}</Title>
        </Wrapper>
    )
}

export default PriceListCard