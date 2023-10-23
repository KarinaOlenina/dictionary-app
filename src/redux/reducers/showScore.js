import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: false,
}

export const showScore = createSlice({
    name: 'showScore',
    initialState,
    reducers: {
        result: (state, {payload}) => {
            state.value = payload
        },
    },
})

export const {result} = showScore.actions;

export default showScore.reducer;