import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: false,
}

export const openQuestion = createSlice({
    name: 'openQuestion',
    initialState,
    reducers: {
        result: (state, {payload}) => {
            state.value = payload
        },
    },
})

export const {result} = openQuestion.actions

export default openQuestion.reducer