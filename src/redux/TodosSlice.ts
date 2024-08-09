import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {TodosTypes} from "../ttypes";

const initialState:TodosTypes = {
    todos:[],
    loading:false,

}
interface removeID{
    id:number,
    meta?:object
}
interface check{
    id:number,
    completed:boolean
}
export let loadTodos = createAsyncThunk(
    "load/load/todos",
    async () => {
        const response = await  fetch("https://jsonplaceholder.typicode.com/todos")
        return await response.json()

    }
)


export const removeTodo = createAsyncThunk(
    "delete/todo/start",
    async ({id}:removeID)=>{
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: "DELETE"
            })
        const data = response.json()
        return{
            data,id
        }
    }
)


export const updateCheck = createAsyncThunk(
    "load/user/start",
    async ({id,completed}:check)=>{
        const response = await         fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
            method:"PATCH",
            body:JSON.stringify({
                completed: !completed
            })
        })
        return response.json()
    }
)


export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder
            .addCase(loadTodos.pending, (state) => {
                state.loading = true;
            })
            .addCase(loadTodos.fulfilled, (state,action) => {
                state.loading = false;
                state.todos = action.payload
            })
            .addCase(removeTodo.pending, (state, action) => {
                const {id} = action.meta.arg
                state.todos=state.todos.map(todo=>{
                    if(todo.id === id){
                        return{
                            ...todo,
                            deleting:true
                        }
                    }
                    return todo;
                })
            })
            .addCase(removeTodo.fulfilled, (state, action) => {
                state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
            })
            .addCase(updateCheck.pending, (state, action) => {
                const {id} = action.meta.arg
                state.todos = state.todos.map(todo => {
                    if(todo.id === id){
                        return{
                            ...todo,
                            checking:true
                        }
                    }
                    return todo;
                })
            })
            .addCase(updateCheck.fulfilled,(state, action) => {
                state.todos = state.todos.map(todo => {
                    if(todo.id === action.payload.id){
                        return{
                            ...todo,
                            completed: !todo.completed,
                            checking:false
                        }
                    }
                    return todo;
                })
            })
    }
})


export default todoSlice.reducer