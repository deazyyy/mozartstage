import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button } from '@pancakeswap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import useI18n from 'hooks/useI18n'
import { useAllHarvest } from 'hooks/useHarvest'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import UnlockButton from 'components/UnlockButton'
import CakeHarvestBalance from './CakeHarvestBalance'
import CakeWalletBalance from './CakeWalletBalance'

const StyledFarmStakingCard = styled(Card)`
  background-repeat: no-repeat;
  background-position: top right;
  min-height: 376px;
`

const Block = styled.div`
  margin-bottom: 16px;
`

const CardImage = styled.img`
  margin-bottom: 16px;
`

const Label = styled.div`
  color: #000;
  font-size: 14px;
`

const Actions = styled.div`
  margin-top: 0px;
`
const Address = styled.div`
  color: #da2631;
  margin-bottom:28px;
`
const Copyaddress = styled.div`
  color: #da2631;
  margin-top:6px;
`
const ButtonOuter = styled.div`
  display:flex;
  align-items:center;
  img{
    margin-right:24px;
    width:40px;
    height:auto;
    margin-bottom:0;
  }
  margin-bottom:26px
`
const BottomBlock = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-bottom:26px
`

const FarmedStakingCard = () => {
  const [pendingTx, setPendingTx] = useState(false)
  const { account } = useWeb3React()
  const TranslateString = useI18n()
  const farmsWithBalance = useFarmsWithBalance()
  const balancesWithValue = farmsWithBalance.filter((balanceType) => balanceType.balance.toNumber() > 0)

  const { onReward } = useAllHarvest(balancesWithValue.map((farmWithBalance) => farmWithBalance.pid))

  const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    try {
      await onReward()
    } catch (error) {
      // TODO: find a way to handle when the user rejects transaction or it fails
    } finally {
      setPendingTx(false)
    }
  }, [onReward])

  return (
    <StyledFarmStakingCard>
      <CardBody>
        <Heading size="xl" mb="24px" className="bgbxheading">
          {TranslateString(542, 'Planets & Staking')}
        </Heading>
        <Address>
          0x0abd3E3502c15ec252f90F64341cbA74a24fba06
          <Copyaddress>Copy Address</Copyaddress>
        </Address>
        <ButtonOuter>
          <CardImage src="/images/mozart/mozart-head.png" alt="mozart logo"  />
          <Button>Add MELODY to Metamask</Button>
        </ButtonOuter>
        <Block >
          <CakeHarvestBalance />
          <Label >{TranslateString(544, 'MELODY to Harvest')}:</Label>
        </Block>
        <BottomBlock>
          <Block>
            <CakeWalletBalance />
            <Label>{TranslateString(546, 'MELODY in Wallet')}:</Label>
          </Block>
          <Actions>
            {account ? (
              <Button
                id="harvest-all"
                disabled={balancesWithValue.length <= 0 || pendingTx}
                onClick={harvestAllFarms}
                width="100%"
              >
                {pendingTx
                  ? TranslateString(548, 'Collecting CAKE')
                  : TranslateString(532, `Harvest all (${balancesWithValue.length})`, {
                      count: balancesWithValue.length,
                    })}
              </Button>
            ) : (
              <UnlockButton width="100%" />
            )}
          </Actions>
        </BottomBlock>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default FarmedStakingCard
