import React from 'react';

export const  loadTodos = (props) => {
    return (dispatch)=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then((json)=>{
                dispatch({
                    type:'todos',
                    payload:json
                })
            })
    };
}
