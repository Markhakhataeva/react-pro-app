

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
