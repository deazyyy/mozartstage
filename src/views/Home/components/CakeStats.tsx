import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  position:relative;
  overflow:visible;
}
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
  color:#000
`

const CakeStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(getCakeAddress()))
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0
  const marketcap =2404728

  return (
    <StyledCakeStats>
      
      <CardBody>
        <Heading size="xl" mb="24px" className="bgbxheading">
          {TranslateString(534, 'MELODY Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px">{TranslateString(536, 'Total MELODY Supply')}</Text>
          {cakeSupply && <CardValue fontSize="14px" value={cakeSupply} />}
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(538, 'Market Cap')}</Text>
          <CardValue fontSize="14px" decimals={0} value={marketcap} />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(538, 'Total MELODY Burned')}</Text>
          <CardValue fontSize="14px" decimals={0} value={burnedBalance} />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(540, 'New MELODY/block')}</Text>
          <CardValue fontSize="14px" decimals={0} value={22} />
        </Row>
      </CardBody>
      <img src="images/mozart/stats.png" alt="stats" className="mozartstatsimg"/>
    </StyledCakeStats>
  )
}

export default CakeStats
