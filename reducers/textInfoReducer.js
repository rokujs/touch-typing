import { createSlice } from "@reduxjs/toolkit"
const INIT_STATE = {
  ppm: 0,
  minutes: 0,
  words: 0,
  start: 0,
}

export const textInfoReducer = createSlice({
  name: "textInfo",
  initialState: INIT_STATE,
  reducers: {
    updatePpm: (state, action) => {
      const { minutes } = state
      state.ppm = Math.round(action.payload / minutes)
    },
    startGame: state => {
      state.start = new Date().getTime()
    },
    updateMinutes: state => {
      const now = new Date().getTime()
      const minutes = (now - state.start) / 1000 / 60
      state.minutes = minutes
    },
    updateWords: (state, action) => {
      state.words = action.payload
    },
  },
})

export const textInfoSelector = state => state.textInfo

export const { updatePpm, updateMinutes, startGame, updateWords } =
  textInfoReducer.actions

export default textInfoReducer.reducer
