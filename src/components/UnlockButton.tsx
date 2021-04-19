import React from 'react'
import styled from "styled-components";
import { Button, useWalletModal } from '@pancakeswap-libs/uikit'
import useAuth from 'hooks/useAuth'
import useI18n from 'hooks/useI18n'


const Unlockbtn = styled(Button)`
  background:transparent;
  border: 2px solid #544f56;
  color: #544f56;
`;

const UnlockButton = (props) => {
  const TranslateString = useI18n()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout)

  return (
    <Unlockbtn onClick={onPresentConnectModal} {...props}>
      {TranslateString(292, 'Unlock Wallet')}
    </Unlockbtn>
  )
}

export default UnlockButton
