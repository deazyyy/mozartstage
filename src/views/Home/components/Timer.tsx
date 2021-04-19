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
  margin-bottom:32px;
  overflow:visible;
`
const TimeOuter = styled.div`
  text-align:center;
  width: 100%;
  color: #000;
  font-weight: 500;
  margin:20px;
`
const Amount = styled.div`
  margin-bottom:10px
`
const Bidder = styled.div`
  margin-bottom:20px
`
const Participate = styled(Button)`
  margin-bottom:10px;
  margin-left:10px;
  background-color: #d75d45;
`


const BuyMelody = () => {
  const TranslateString = useI18n()
  return (
    <StyledTotalValueLockedCard>
     
        <Flex width="100%" alignItems="center">
          <img src="images/mozart/piano.png" alt="piano" className="pianoimg"/>
          <TimeOuter>
            <Heading size="lg" mb="10px">
              {TranslateString(762, 'Till Black Hole collapse, Last bidder takes all!')}
            </Heading>
            <Heading size="xl" mb="10px">00d 00h 14m 35s</Heading>
            <Heading size="lg" mb="10px">
              1,113.11 MELODY
            </Heading>
            <Amount>$576.33</Amount>
            <Bidder>Last bidder: 0xdC5dbc...7563b4Ce</Bidder>
            <div className="btnOuter">
              <UnlockButton />
              <Participate >Participate</Participate>
            </div>
          </TimeOuter>
        </Flex>

    </StyledTotalValueLockedCard>
  )
}

export default BuyMelody