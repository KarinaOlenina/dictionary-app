import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const stats = createSlice({
    name: 'stats',
    initialState,
    reducers: {
        result: (state, {payload}) => {
            state.value += payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { result } = stats.actions

export default stats.reducer