import {configureStore} from '@reduxjs/toolkit'
import currentAnswer from './reducers/currentAnswer'
import openQuestion from "./reducers/openQuestion";
import currentQuestion from "./reducers/currentQuestion";

export const store = configureStore({
    reducer: {
        currentAnswer: currentAnswer,
        openQuestion: openQuestion,
        currentQuestion: currentQuestion,
    },

})
