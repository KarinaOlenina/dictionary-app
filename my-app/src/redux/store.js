import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/stats'

export const store = configureStore({
    reducer: {
        stats: counterReducer,
    },

})
