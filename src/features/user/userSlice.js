import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.user = action.payload.user;
    },
  },
})

export const { setUserLoginDetails } = userSlice.actions


export default userSlice.reducer