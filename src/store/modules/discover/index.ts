import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const discoverSlice = createSlice({
  name: 'discover',
  initialState: {
    name: 'ssss'
  },
  reducers: {
    setName(state, { payload }: PayloadAction<string>) {
      state.name = payload
    }
  }
})

export const { setName } = discoverSlice.actions

export default discoverSlice.reducer
