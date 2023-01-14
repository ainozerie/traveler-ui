import { configureStore } from '@reduxjs/toolkit'
import updateSession from './session/session'


export default configureStore({
  reducer: {
    session: updateSession 
  }
});