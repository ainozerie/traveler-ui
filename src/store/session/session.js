import { createSlice } from '@reduxjs/toolkit'

export const updateSession = createSlice({
  name: 'session',
  initialState: {
    isLoading: false,
    user: ''
  },
  reducers: {
    toggleIsLoading: state => {
      state.isLoading = !state.isLoading
    },
    changeUser: (state, action) => {
      state.user = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { toggleIsLoading, changeUser } = updateSession.actions;

export default updateSession.reducer;