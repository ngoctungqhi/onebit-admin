import { closeSelectWalletModal } from 'features/app/states/appSlice'
import { useCallback } from 'react'
import { useAppSelector, useAppDispatch } from 'states/hooks'

export const useAppLayoutRouteElement = () => {
  const dispatch = useAppDispatch()

  const isOpenSelectWalletModal = useAppSelector(
    (state) => state.app.isOpenSelectWalletModal
  )

  const handleCancel = useCallback(() => {
    dispatch(closeSelectWalletModal())
  }, [dispatch])

  return { isOpenSelectWalletModal, handleCancel }
}
