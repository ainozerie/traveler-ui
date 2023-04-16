import { createSlice } from '@reduxjs/toolkit'

let today = new Date();

const modifyDate = (date) => {
  return date.toISOString().slice(0, 10)
}

export const updateSession = createSlice({
  name: 'session',
  initialState: {
    isLoading: false,
    user: '',
    searchFilters: {
      direction: 'Rus',
      date: modifyDate(today),
      capacity: '1'
    }
  },
  reducers: {
    toggleIsLoading: state => {
      state.isLoading = !state.isLoading
    },
    changeUser: (state, action) => {
      state.user = action.payload
    },
    updateFilters: (state, action) => {
      state.searchFilters[Object.keys(action.payload)[0]] = action.payload[Object.keys(action.payload)[0]];
    },
    updateFilterDate: (state, action) => {
      state.searchFilters.date = action.payload;
    },
  }
})

// Action creators are generated for each case reducer function
export const { toggleIsLoading, changeUser, updateFilters, updateFilterDate} = updateSession.actions;

export default updateSession.reducer;