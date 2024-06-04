
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadTodos, removeTodo} from "./action";
import {Header} from "./Header";
import {updateCheck} from "./action";

export const App = () => {
     const photos = useSelector((state)=>state.todos)
     const loading = useSelector((state)=>state.loading)
     const dispatch = useDispatch();


     useEffect(()=>{
         dispatch(loadTodos())
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
                loading  ? ".....":(
                  photos.map((item)=>{
                      return (
                          <div className="todo_wrapper">
                              <div className="checkbox">
                                  <input type="checkbox" checked={item.completed} onChange={()=>handleChecked(item.id,item.completed)}/>
                              </div>
                              <div className="todo">
                                  {item.title}
                              </div>
                              <div className="button">
                                  <button onClick={() => handleDelete(item.id)}>Удалить</button>
                              </div>

                          </div>
                      )
                  })
                )
              }

    </div>
  );
}







