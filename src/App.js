
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadTodos} from "./action";

export const App = () => {
     const todos = useSelector((state)=>state)
     const dispatch = useDispatch();
     useEffect(()=>{
         dispatch(loadTodos())
     },[])



  return (
    <div className="App">
          <>
              {
                  todos.map((item)=>{
                      return <>
                          {item.title}
                            </>
                  })
              }
          </>
    </div>
  );
}
