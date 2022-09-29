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

// Action creators are generated for each case reducer function
export const {result} = openQuestion.actions

export default openQuestion.reducer