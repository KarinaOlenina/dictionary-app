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
        resetResult: (state) => {
            state.value = 0;
        },
    },
})

// Action creators are generated for each case reducer function
export const {result} = currentAnswer.actions

export default currentAnswer.reducer