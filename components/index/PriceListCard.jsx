import React from 'react'
import styled from 'styled-components'
import wavedBackground from '../../assets/images/wave_background.svg'

const Wrapper = styled.article`
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    font-family: 'Roboto', sans-serif;
`

const Title = styled.h3`
    min-height: 60px;
    padding: 15px 20px;
    font-size: 20px;
    font-weight: 400;
    color: #ffffff;
    background-image: url(${wavedBackground});
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 10px 10px 0 0;
`

const StyledBody = styled.div`
    width: 100%;
    padding: 0 40px;
`

const StyledPrice = styled.span`
    width: 100%;
    margin: 40px 0;
    display: block;
    font-size: 40px;
    text-align: center;
    font-family: 'Roboto Slab', serif;
`

const PriceListCard = ({ className, title, price, children }) => {
    return (
        <Wrapper className={className}>
            <Title>{title}</Title>
            <StyledBody>
                { children }
            </StyledBody>
            <StyledPrice>{ price } тг</StyledPrice>
        </Wrapper>
    )
}

export default PriceListCard