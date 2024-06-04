

export const  loadTodos = (props) => {
    return (dispatch)=>{
        dispatch({type:"load"})
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

export const removeTodo = (id) => {
    return (dispatch)=>{
        dispatch({type:"removeT", payload:id})


        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
            method:'Delete'
        })
            .then((response)=>response.json())
            .then(()=>{
                dispatch({type:"removeTodo",payload:id})
            })

    }
}


export const updateCheck = (id,completed) => {
    return (dispatch)=>{
        dispatch({type:"updateCheck"})

        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
            method:"PATCH",
            body:JSON.stringify({
                completed: !completed
            })
        })
            .then(res => res.json())
            .then(()=>{
                dispatch({type:"updateCheck",payload:id})
            })

    }
}