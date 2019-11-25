import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`

`

const Title = styled.h2`
    width: 100%;
    margin-bottom: 50px;
    text-align: center;
    font-family: 'Roboto Slab', serif;
    font-size: 30px;
    font-weight: 400;
`

const PriceListSection = ({ className }) => {
    return (
        <Wrapper className={className}>
            <Title>Прайс лист</Title>
        </Wrapper>
    )
}

export default PriceListSection