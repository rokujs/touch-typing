import { createSlice } from "@reduxjs/toolkit"
const INIT_STATE = {
  ppm: 0,
  minutes: 0,
  visualMinutes: 0,
  visualSeconds: 0,
  characters: 0,
  start: 0,
  average: 100,
  level: "",
}

export const textInfoReducer = createSlice({
  name: "textInfo",
  initialState: INIT_STATE,
  reducers: {
    updatePpm: (state, action) => {
      const { minutes } = state
      state.ppm = Math.round(action.payload / minutes)
    },
    startGame: (state, action) => {
      state.start = new Date().getTime()
      state.level = action.payload
      state.ppm = 0
      state.minutes = 0
      state.average = 100
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
    updateVisualTime: state => {
      const now = new Date().getTime()
      const min = (now - state.start) / 1000 / 60
      console.log("min", min)
      let minutes = 0
      while (min > 0.6) {
        minutes += 1
        min -= 0.6
      }
      const seconds = Math.round(min * 10)

      state.visualSeconds = (seconds > 9 ? "" : "0") + seconds
      state.visualMinutes = (minutes > 9 ? "" : "0") + minutes
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
  updateVisualTime,
} = textInfoReducer.actions

export default textInfoReducer.reducer
