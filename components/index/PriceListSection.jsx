import React from 'react'
import styled from 'styled-components'
import PriceListCard from './PriceListCard'

const Wrapper = styled.section`
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.h2`
    width: 100%;
    margin-bottom: 50px;
    text-align: center;
    font-size: 30px;
    font-weight: 400;
    font-family: 'Roboto Slab', serif;
`

const Row = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-between;
`

const StyledCard = styled(PriceListCard)`
    width: 20vw;
    height: 400px;
`

const StyledList = styled.ul`
    width: 100%;
`

const StyledListItem = styled.li`
    margin-bottom: 15px;
`

const PriceListSection = ({ className }) => {
    return (
        <Wrapper className={className}>
            <Title>Прайс лист</Title>
            <Row>
                <StyledCard title='Консультация специалиста' price={3000}>
                    <StyledList>
                        <StyledListItem>Длительность: 30мин</StyledListItem>
                        <StyledListItem>Консультация с ведущим эндоваскулярным хирургом в Казахстане</StyledListItem>
                    </StyledList>
                </StyledCard>
                <StyledCard></StyledCard>
                <StyledCard />
            </Row>
        </Wrapper>
    )
}

export default PriceListSection