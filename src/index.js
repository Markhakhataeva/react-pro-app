import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import {thunk} from "redux-thunk";

const initialState={photos:[],loading:false

}
const  reducer = (state=initialState, action) => {
    switch(action.type) {
        case "load":
            return {
                ...state,
                loading:true
            }


        case "photos":
            return {
                ...state,
                photos:action.payload,
                loading:false
            }

        case "removePhoto":
            return {
                ...state,
                photos:state.photos.filter(photo => photo.id !== action.payload)
            }
        default:return state
    }
}

const store = createStore(reducer,applyMiddleware(thunk));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
