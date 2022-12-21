import { configureStore } from '@reduxjs/toolkit'
import oneReducer from './features/oneSlice'


export default configureStore({
  reducer: {
    isLoading: oneReducer
  }
});