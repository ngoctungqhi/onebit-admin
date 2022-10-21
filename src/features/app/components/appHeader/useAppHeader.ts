import { openSelectWalletModal } from 'features/app/states/appSlice'
import { useCallback } from 'react'
import { useAppDispatch } from 'states/hooks'

export const useAppHeader = () => {
  const dispatch = useAppDispatch()

  const handleOpenSelectWalletModal = useCallback(() => {
    dispatch(openSelectWalletModal())
  }, [dispatch])

  return { handleOpenSelectWalletModal }
}
