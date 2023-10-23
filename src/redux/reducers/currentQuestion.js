import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const currentQuestions = createSlice({
    name: 'currentQuestions',
    initialState,
    reducers: {
        result: (state, {payload}) => {
            state.value += payload
        },
        resetResult: (state) => {
            state.value = 0; // Обнулення значення result
        },
    },
})

export const {result} = currentQuestions.actions

export default currentQuestions.reducer