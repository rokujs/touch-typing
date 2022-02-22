import { createSlice } from "@reduxjs/toolkit"
const INIT_STATE = {
  character: 0,
  word: 0,
  isActiveListWords: [],
  countFailed: 0,
  firstPress: false,
  isLoading: false,
  newListWords: [],
}

export const gameReducer = createSlice({
  name: "game",
  initialState: INIT_STATE,
  reducers: {
    init: (state, action) => {
      state.isLoading = true
      state.newListWords = action.payload
      state.isActiveListWords = action.payload.map(w =>
        w.map(() => true)
      )
    },
    start: (state) => {
      state.firstPress = true
    },
    update: (state, action) => {
      state.character += 1
      state.isActiveListWords = action.payload
    },
    updateWord: (state) => {
      state.word += 1
      state.character = 0
    },
    updateCountFailed: (state) => {
      state.countFailed += 1
    },
    reset: (state) => {
      console.log("reset")
      state.countFailed = 0
      state.isActiveListWords = state.newListWords.map(arr => arr.map(() => true))
      state.character = 0
      state.word = 0
      state.firstPress = false
    }
  },
})

export const gameSelector = state => state.game

export const {
  init,
  start,
  update,
  updateWord,
  updateCountFailed,
  reset,
} = gameReducer.actions

export default gameReducer.reducer
