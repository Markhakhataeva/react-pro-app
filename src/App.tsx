import {useTypedSelector} from "./hooks"
import React, {useEffect} from "react";
import {Header} from "./components/Header";
import {Todos} from "./components/Todos";
import ReactLoading from "react-loading";
import {useActions} from "./hooks/useActions";

export const App:React.FC = () => {
     const loading:boolean = useTypedSelector((state) => state.loading);
     const loadUser:boolean = useTypedSelector((state)=>state.loadUser)
     const {loadTodos,loadUsers,removeTodo,updateCheck}=useActions()

     useEffect(():void=>{
         loadTodos()
         loadUsers()
     },[])

    const handleDelete = (id:number):void => {
         removeTodo(id)
    }

    const handleChecked = (id:number,completed:boolean):void =>{
         updateCheck(id,completed)
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







