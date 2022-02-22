import { configureStore } from "@reduxjs/toolkit"
import textInfoReducer from "./textInfoReducer"
import gameReducer from './gameReducer'

function makeStore() {
  return configureStore({
    reducer: {
      textInfo: textInfoReducer,
      game: gameReducer,
    },
  })
}

const store = makeStore()

export default store
