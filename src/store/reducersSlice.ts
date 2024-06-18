import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  flag: false,
  isActive: false,
}

const toolkitSlice = createSlice({
  name: "reducers",
  initialState,

  reducers: {
    flagUpdate: (state, action) => {
      state.flag = action.payload
    },
  },
})

export const { flagUpdate } = toolkitSlice.actions
export default toolkitSlice.reducer
