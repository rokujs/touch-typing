import { configureStore } from "@reduxjs/toolkit"
import textInfoReducer from "./textInfoReducer"

function makeStore() {
  return configureStore({
    reducer: {
      textInfo: textInfoReducer,
    },
  })
}

const store = makeStore()

export default store
