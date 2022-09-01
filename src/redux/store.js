import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { reducer as loginReducer } from './login/reducer'

const store = configureStore({
    reducer: {
        login: loginReducer
    },
    middleware: [logger]
})

export default store