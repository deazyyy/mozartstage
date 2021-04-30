import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout,Button } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import LotteryCard from 'views/Home/components/LotteryCard'
import CakeStats from 'views/Home/components/CakeStats'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import Timer from 'views/Home/components/Timer'
import BuyMelody from 'views/Home/components/BuyMelody'
import EarnAPRCard from 'views/Home/components/EarnAPRCard'
import EarnAssetCard from 'views/Home/components/EarnAssetCard'
import WinCard from 'views/Home/components/WinCard'
import Farms from 'views/Farms/Farms'
import Farm from 'views/Pools/Syrup'
import ClaimModal from './Modals/Claim'

const Hero = styled.div`
  align-items: center;
  background-image: url('/images/mozart/hero_moz.png'), url('/images/mozart/hero_bg.png');
  background-position:right 40px bottom 0%,center;
  background-repeat: no-repeat,no-repeat;
  background-size: contain , cover;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding: 40px;
  text-align: left;
  min-height: 300px;
  border-radius:20px;
  align-items: flex-start;
  @media (max-width: 768px) {
    background-size: 45% , cover;
    background-position:right 0px bottom 0%,center;
  } 
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
  @media (max-width: 968px) {
    grid-template-columns: unset;
  } 
`
const HeroInner = styled.div`
  width:50%;
  @media (max-width: 768px) {
    width:80%;
  } 
  @media (max-width: 500px) {
    width:100%;
  } 
`

const CTACards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 4;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()
  const childRef = useRef(null);
  return (
    <Page>
      <ClaimModal ref={childRef}/>
      <Hero>
        <HeroInner>
          <Heading as="h1" size="xl" mb="10px" color="secondary">
            {TranslateString(576, 'Headline goes here')}
          </Heading>
          <Text mb="10px">{TranslateString(578, 'Lorem ipsum dolor sit amet, consetetur  elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore  aliquyam erat, sed.')}</Text>
          <Button onClick={() => childRef.current.openModal()} >Learn More </Button>
        </HeroInner>
      </Hero>
      <div>
        <Cards>
          <BuyMelody/>
          <TotalValueLockedCard />
          {/* <LotteryCard /> */}
        </Cards>
        
        <Timer />
          {/* <LotteryCard /> */}
     
        {/* <CTACards>
          <EarnAPRCard />
          <EarnAssetCard />
          <WinCard />
        </CTACards> */}
        <Cards>
          <FarmStakingCard />
          <CakeStats />
        </Cards>
      </div>
      <Farms/>
      <Farm/>
    </Page>
  )
}

export default Home
