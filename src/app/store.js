import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import articleReducer from '../features/user/articleSlice'

export const store = configureStore({
  reducer: {
      user: userReducer,
      article: articleReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})