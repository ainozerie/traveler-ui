import { configureStore } from '@reduxjs/toolkit'
import loadingReducer from './features/session'


export default configureStore({
  reducer: {
    session: loadingReducer 
  }
});