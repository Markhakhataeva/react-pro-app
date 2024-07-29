
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {Header} from "./Header";
import {Todos} from "./components/Todos";
import ReactLoading from "react-loading";
import {loadTodos, removeTodo, updateCheck} from "./redux/TodosSlice";
import {loadUsers} from "./redux/UserSlice";

export const App = () => {
     const loading = useSelector((state)=>state.todos.loading)
     const dispatch = useDispatch();
     const loadUser = useSelector((state)=>state.users.loadUser)

     useEffect(()=>{
         dispatch(loadTodos())
         dispatch(loadUsers())
     },[dispatch])

    const handleDelete = (id) => {
         dispatch(removeTodo({id}))
    }

    const handleChecked = (id,completed) =>{
         dispatch(updateCheck({id, completed}))
    }

  return (
    <div className="App">
          <Header />
              {
                // loading || loadUser ? <ReactLoading color="#126fcf" type="spin" width={30} height={30} /> :
                    <Todos handleChecked={handleChecked} handleDelete={handleDelete}/>

              }

    </div>
  );
}







