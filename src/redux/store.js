import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './features/movieSlice'

export const store = configureStore({
  reducer: {
    data: movieReducer
  },
  devTools: {name: "Huspy"}
})
