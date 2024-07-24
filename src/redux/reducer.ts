import {ActionType, FetchTODOS_Actions, ReduxState} from "../types";


const initialState:ReduxState={
    todos:[],
    loading:false,
    users:[],
    loadUser:false

}

export const reducer = (state=initialState, action:FetchTODOS_Actions) => {
    switch(action.type) {
        case ActionType.FETCH_TODOS:
            return {
                ...state,
                loading:true
            }


        case ActionType.FETCH_TODOS_SUCCESS:
            return {
                ...state,
                todos:action.payload,
                loading:false
            }

        case ActionType.FETCH_DELETE:
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
        case  ActionType.FETCH_TODOS_DELETE:
            return {
                ...state,
                todos:state.todos.filter(todo => todo.id !== action.payload)
            }


        case ActionType.FETCH_CHECK:
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
        case  ActionType.FETCH_CHECK_SUCCESS:
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

            case ActionType.FETCH_USER:
                return {
                    ...state,
                    loadUser:true
                }


        case ActionType.FETCH_USER_SUCCESS:
            return {
                ...state,
                users:action.payload,
                loadUser:false
            }

        default:return state
    }
}
