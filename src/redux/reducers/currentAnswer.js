import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const currentAnswer = createSlice({
    name: 'currentAnswer',
    initialState,
    reducers: {
        result: (state, {payload}) => {
            state.value += payload
        },
    },
})

// Action creators are generated for each case reducer function
export const {result} = currentAnswer.actions

export default currentAnswer.reducer