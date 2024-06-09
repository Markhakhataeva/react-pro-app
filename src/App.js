
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadTodos, loadUsers, removeTodo} from "./action";
import {Header} from "./Header";
import {updateCheck} from "./action";
import {Todos} from "./components/Todos";

export const App = () => {
     const loading = useSelector((state)=>state.loading)
     const dispatch = useDispatch();


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
                loading  ? ".....":
                    <Todos handleChecked={handleChecked} handleDelete={handleDelete}/>

              }

    </div>
  );
}







