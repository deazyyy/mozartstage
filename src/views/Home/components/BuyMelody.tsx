import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text,Flex ,Button } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import UnlockButton from 'components/UnlockButton'
import { useGetStats } from 'hooks/api'

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
  width:100%;
  overflow:visible;
  flex-direction:column;
  padding:24px;
`
const Info = styled.div`
  margin:14px 0;
`


const Timer = () => {
  const TranslateString = useI18n()
  return (
    <StyledTotalValueLockedCard>
          <img src="images/mozart/standing.png" alt="piano" className="mozartstandingimg"/>
          <Info>Farm your way into DeFi Space</Info>
          <Button >Buy Melody</Button>
          
    </StyledTotalValueLockedCard>
  )
}

export default Timer