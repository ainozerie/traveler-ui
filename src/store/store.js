import { configureStore } from '@reduxjs/toolkit'
import updateSession from './features/session'


export default configureStore({
  reducer: {
    session: updateSession 
  }
});