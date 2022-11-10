import { configureStore } from '@reduxjs/toolkit'
import organizationReducer from './slices/organizationSlice'

export const store = configureStore({
  reducer: {
    organization: organizationReducer,
  },
})
