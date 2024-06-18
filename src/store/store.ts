import { configureStore } from "@reduxjs/toolkit"
import toolkitSlice from "./reducersSlice"

const store = configureStore({
  reducer: {
    state: toolkitSlice,
  },
})

export default store
