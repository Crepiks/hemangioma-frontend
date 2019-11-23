import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Divider = styled.div`
    height: 18px;
    width: 1px;
    margin: 0 5px;
    background-color: #AAABAD;
`

const Language = styled.button`
    outline: none;
    border: none;
    background-color: transparent;
    font-family: 'Roboto Slab', serif;
    font-size: 14px;
    font-weight: 400px;
    color: #AAABAD;
    cursor: pointer;
`

const LanguageSelect = ({ className }) => {
    return (
        <Wrapper className={className}>
            <Language>QAZ</Language>
            <Divider />
            <Language>RUS</Language>
        </Wrapper>
    )
}

export default LanguageSelect