import {Dispatch} from "react";
import {ActionType, FetchTODOS_Actions} from "../../types";


export const  loadTodos = () => {
    return (dispatch:Dispatch<FetchTODOS_Actions>):void=>{
        dispatch({type:ActionType.FETCH_TODOS});


        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then((json):void=>{
                dispatch({
                    type:ActionType.FETCH_TODOS_SUCCESS,
                    payload:json
                })
            })
    };
}

export const removeTodo = (id:number) => {
    return (dispatch:Dispatch<FetchTODOS_Actions>):void=>{
        dispatch({type:ActionType.FETCH_DELETE, payload:id})


        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
            method:'Delete'
        })
            .then((response)=>response.json())
            .then(():void=>{
                dispatch({type:ActionType.FETCH_TODOS_DELETE,payload:id})
            })

    }
}


export const updateCheck = (id:number,completed:boolean) => {
    return (dispatch:Dispatch<FetchTODOS_Actions>):void=>{
        dispatch({type:ActionType.FETCH_CHECK,payload:id})

        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
            method:"PATCH",
            body:JSON.stringify({
                completed: !completed
            })
        })
            .then(res => res.json())
            .then(():void=>{
                dispatch({type:ActionType.FETCH_CHECK_SUCCESS,payload:id})
            })

    }
}


export const loadUsers = () =>{
    return (dispatch:Dispatch<FetchTODOS_Actions>):void=>{
        dispatch({type:ActionType.FETCH_USER})

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then((json):void=>{
                dispatch({
                    type:ActionType.FETCH_USER_SUCCESS,
                    payload:json
                })
            })
    };
}