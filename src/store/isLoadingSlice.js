import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'isLoading',
  initialState: {
    value: false,
  },
  reducers: {
    setTrue: (state) => {
      state.value = true;
    },
    setFalse: (state) => {
      state.value = false;
    }
  },
})

export const { setFalse, setTrue } = counterSlice.actions

export default counterSlice.reducer