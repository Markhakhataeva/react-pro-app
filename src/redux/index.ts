import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "./TodosSlice";
import userReducer from "./UserSlice"


export const store = configureStore({
    reducer: {
        todos:todoReducer,
        users:userReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch