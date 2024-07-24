import {applyMiddleware, createStore} from "redux";
import {thunk} from "redux-thunk";
import {reducer} from "./reducer";
import {createLogger} from "redux-logger";

const logger = createLogger({
    diff:true,
    collapsed:true
})


export const store = createStore(reducer,applyMiddleware(thunk,logger));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;