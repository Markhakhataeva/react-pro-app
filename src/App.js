
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadTodos} from "./action";

export const App = () => {
     const todos = useSelector((state)=>state.todos)
     const loading = useSelector((state)=>state.loading)
     const dispatch = useDispatch();


     useEffect(()=>{
         dispatch(loadTodos())
     },[])



  return (
    <div className="App">
          <>
              {
                loading  ? ".....":(
                  todos.map((item)=>{
                  return <>
                    {item.title}
                        </>
                  })
                  )
              }
          </>
    </div>
  );
}
