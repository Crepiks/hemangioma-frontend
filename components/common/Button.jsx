import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #924E4E;
    font-family: 'Roboto Slab', serif;
    font-weight: 400;
    outline: none;
    border: none;
    color: #ffffff;
    cursor: pointer;
`

const Button = ({ className, children }) => (
    <StyledButton className={className}>{ children }</StyledButton>
)

export default Button