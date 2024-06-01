
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadTodos} from "./action";
import {Header} from "./Header";

export const App = () => {
     const todos = useSelector((state)=>state.todos)
     const loading = useSelector((state)=>state.loading)
     const dispatch = useDispatch();


     useEffect(()=>{
         dispatch(loadTodos())
     },[])



  return (
    <div className="App">
          <Header />
              {
                loading  ? ".....":(
                  todos.map((item)=>{
                  return (
                      <div className="todo_wrapper">
                          <div className="checkbox">
                              <input type="checkbox"/>
                          </div>
                          <div className="todo">
                              {item.title}
                          </div>
                          <div className="button">
                              <button>Удалить</button>
                          </div>

                      </div>
                  )
                  })
                )
              }

    </div>
  );
}
