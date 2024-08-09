import {FC, useEffect} from "react";
import {loadTodos, removeTodo, updateCheck} from "../redux/TodosSlice";
import {Todos} from "./Todos";
import {Header} from "./Header";
import {loadUsers} from "../redux/UserSlice";

export const App:FC = () => {

     useEffect(():void=>{
         loadTodos()
         loadUsers()
     },[])


    const handleDelete = (id:number) => {
         (removeTodo({id:id}))
    }

    const handleChecked = (id:number,completed:boolean):void =>{
         (updateCheck({id:id, completed:completed}))
    }

  return (
    <div className="App">
            <Header />
              {
                    <Todos handleChecked={handleChecked} handleDelete={handleDelete}/>
              }

    </div>
  );
}







