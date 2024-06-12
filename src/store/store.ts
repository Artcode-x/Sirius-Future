import { configureStore } from "@reduxjs/toolkit"
import toolkitSlice from "./reducersSlice"

const store = configureStore({
  reducer: {
    store: toolkitSlice.reducer,
  },
})

export default store
