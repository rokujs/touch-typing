import { createSlice } from "@reduxjs/toolkit"
const INIT_STATE = {
  ppm: 0,
  minutes: 0,
  characters: 0,
  start: 0,
  average: 100,
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
    updateCharacters: (state, action) => {
      state.characters = action.payload
    },
    updateAverage: (state, action) => {
      const average = Math.ceil((action.payload * 100) / state.characters)
      state.average = 100 - average
    },
  },
})

export const textInfoSelector = state => state.textInfo

export const {
  updatePpm,
  updateMinutes,
  startGame,
  updateCharacters,
  updateAverage,
} = textInfoReducer.actions

export default textInfoReducer.reducer
