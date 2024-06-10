
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {loadTodos, loadUsers, removeTodo} from "./action";
import {Header} from "./Header";
import {updateCheck} from "./action";
import {Todos} from "./components/Todos";
import ReactLoading from "react-loading";

export const App = () => {
     const loading = useSelector((state)=>state.loading)
     const dispatch = useDispatch();
     const loadUser = useSelector((state)=>state.loadUser)

     useEffect(()=>{
         dispatch(loadTodos())
         dispatch(loadUsers())
     },[])

    const handleDelete = (id) => {
         dispatch(removeTodo(id))
    }

    const handleChecked = (id,completed) =>{
         dispatch(updateCheck(id,completed))
    }

  return (
    <div className="App">
          <Header />
              {
                loading || loadUser ? <ReactLoading color="#126fcf" type="spin" width={30} height={30} /> :
                    <Todos handleChecked={handleChecked} handleDelete={handleDelete}/>

              }

    </div>
  );
}







