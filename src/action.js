

export const  loadTodos = (props) => {
    return (dispatch)=>{
        dispatch({type:"load"})
        fetch("https://jsonplaceholder.typicode.com/photos/?_limit=30")
            .then(res => res.json())
            .then((json)=>{
                dispatch({
                    type:'photos',
                    payload:json
                })
            })
    };
}

export const removePhoto = (id) => {
    return (dispatch)=>{


        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`,{
            method:'Delete'
        })
            .then((response)=>response.json())
            .then((json)=>{
                dispatch({type:"removePhoto",payload:id})
            })

    }
}