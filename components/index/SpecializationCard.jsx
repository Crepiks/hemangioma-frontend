import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: grey;
`

const Card = ({ className }) => {
    return (
        <Wrapper className={className}>

        </Wrapper>
    )
}

export default Card