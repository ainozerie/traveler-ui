import { createSlice } from '@reduxjs/toolkit'

export const oneCounter = createSlice({
  name: 'isLoading',
  initialState: {
    value: false
  },
  reducers: {
    setTrue: state => {
      state.value = true
    },
    setFalse: state => {
      state.value = false
    }
  }
})

// Action creators are generated for each case reducer function
export const { setTrue, setFalse } = oneCounter.actions;

export default oneCounter.reducer;