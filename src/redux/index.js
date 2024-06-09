import {applyMiddleware, createStore} from "redux";
import {thunk} from "redux-thunk";

const initialState={todos:[],loading:false,
    users:[],
    loadUser:false

}
const  reducer = (state=initialState, action) => {
    switch(action.type) {
        case "load":
            return {
                ...state,
                loading:true
            }


        case "todos":
            return {
                ...state,
                todos:action.payload,
                loading:false
            }

        case "removeT":
            return {
                ...state,
                todos:state.todos.map(todo=>{
                    if(todo.id === action.payload){
                        return{
                            ...todo,
                            deleting:true
                        }
                    }
                    return todo;
                })
            }
        case "removeTodo":
            return {
                ...state,
                todos:state.todos.filter(todo => todo.id !== action.payload)
            }


        case "updateChecked":
            return {
                ...state,
                todos:state.todos.map(todo=>{
                    if(todo.id === action.payload){
                        return{
                            ...todo,
                            checking:true
                        }
                    }
                    return todo;
                })
            }
        case "updateCheck":
            return {
                ...state,
                todos: state.todos.map(todo=>{
                    if(todo.id === action.payload){
                        return{
                            ...todo,
                            completed:!todo.completed,
                            checking:false
                        }
                    }
                    return todo
                })
            }

            case "load/user/start":
                return {
                    ...state,
                    loadUser:true
                }


        case "load/user/fulfilled":
            return {
                ...state,
                users:action.payload,
                loadUser:false
            }

        default:return state
    }
}

export const store = createStore(reducer,applyMiddleware(thunk));
