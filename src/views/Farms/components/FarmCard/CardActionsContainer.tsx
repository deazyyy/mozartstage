import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { provider as ProviderType } from 'web3-core'
import { getAddress } from 'utils/addressHelpers'
import { getBep20Contract } from 'utils/contractHelpers'
import { Button, Flex, Text, Heading } from '@pancakeswap-libs/uikit'
import { Farm } from 'state/types'
import { useFarmFromSymbol, useFarmUser } from 'state/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import useI18n from 'hooks/useI18n'
import useWeb3 from 'hooks/useWeb3'
import { useApprove } from 'hooks/useApprove'
import UnlockButton from 'components/UnlockButton'
import StakeAction from './StakeAction'
import HarvestAction from './HarvestAction'


const Action = styled.div`
  padding: 16px 0;
  margin: 20px 0;
  border-top:1px solid #dfdfdf;
  border-bottom:1px solid #dfdfdf;
`
export interface FarmWithStakedValue extends Farm {
  apr?: number
}

interface FarmCardActionsProps {
  farm: FarmWithStakedValue
  provider?: ProviderType
  account?: string
  addLiquidityUrl?: string
}

const CardActions: React.FC<FarmCardActionsProps> = ({ farm, account, addLiquidityUrl }) => {
  
  const TranslateString = useI18n()
  const [requestedApproval, setRequestedApproval] = useState(false)
  const { pid, lpAddresses } = useFarmFromSymbol(farm.lpSymbol)
  const { allowance, tokenBalance, stakedBalance, earnings } = useFarmUser(pid)
  const lpAddress = getAddress(lpAddresses)
  const lpName = farm.lpSymbol.toUpperCase()
  const isApproved = account && allowance && allowance.isGreaterThan(0)
  const web3 = useWeb3()

  const lpContract = getBep20Contract(lpAddress, web3)

  const { onApprove } = useApprove(lpContract)

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      await onApprove()
      setRequestedApproval(false)
    } catch (e) {
      console.error(e)
    }
  }, [onApprove])
  const rawEarningsBalance = account ? getBalanceNumber(earnings) : 0
  const displayBalance = rawEarningsBalance.toLocaleString()

  const renderApprovalOrStakeButton = () => {
    return isApproved ? (
      <StakeAction
        stakedBalance={stakedBalance}
        tokenBalance={tokenBalance}
        tokenName={lpName}
        pid={pid}
        addLiquidityUrl={addLiquidityUrl}
      />
    ) : (
      <Button mt="8px" width="100%" disabled={requestedApproval} onClick={handleApprove}>
        {TranslateString(758, 'Approve Contract')}
      </Button>
    )
  }

  return (
    <Action>
      <Flex justifyContent="space-between" alignItems="center">
      
          <div style={{textAlign:"left"}}>
            <Text bold textTransform="uppercase" color="text" fontSize="16px" pr="3px">
              {/* TODO: Is there a way to get a dynamic value here from useFarmFromSymbol? */}
              MELODY Earned
            </Text>
            <Heading color={rawEarningsBalance === 0 ? 'textDisabled' : 'text'} fontSize="18px">{displayBalance}</Heading>
          </div>
 
        <HarvestAction earnings={earnings} pid={pid} />
      </Flex>
      <Flex mt="16px">
        <Text textTransform="uppercase" color="text" fontSize="14px" pr="3px" bold>
          {lpName}
        </Text>
        <Text  textTransform="uppercase" color="text" fontSize="14px" bold>
          {TranslateString(1074, 'Staked')}
        </Text>
      </Flex>
      {!account ? <UnlockButton mt="14px" width="auto" /> : renderApprovalOrStakeButton()}
    </Action>
  )
}

export default CardActions
