import { memo } from 'react'
import { Button } from 'antd'
import { useAppHeader } from './useAppHeader'

export const AppHeader = memo(() => {
  const { handleOpenSelectWalletModal } = useAppHeader()

  return (
    <div className="flex justify-end">
      <Button type="primary" onClick={handleOpenSelectWalletModal}>
        Connect wallet
      </Button>
    </div>
  )
})
