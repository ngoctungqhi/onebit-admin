import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const stringToUser = (v: string | null): any => (v ? JSON.parse(v) : undefined)

type AppStateType = {
  loggedInUser?: any
  isOpenSelectWalletModal: boolean
}

const initialAppState: AppStateType = {
  loggedInUser: stringToUser(localStorage.getItem('loggedInUser')),
  isOpenSelectWalletModal: false,
}

export const appSlice = createSlice({
  name: 'app',
  initialState: initialAppState,
  reducers: {
    setLoggedInUser: (state, action: PayloadAction<any>) => {
      state.loggedInUser = action.payload
      localStorage.setItem('loggedInUser', JSON.stringify(state.loggedInUser))
    },
    openSelectWalletModal: (state) => {
      state.isOpenSelectWalletModal = true
    },
    closeSelectWalletModal: (state) => {
      state.isOpenSelectWalletModal = false
    },
  },
})

export const {
  setLoggedInUser,
  openSelectWalletModal,
  closeSelectWalletModal,
} = appSlice.actions
