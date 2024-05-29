
import {useEffect, useState} from "react";

export const App = () => {
  const[data,setData]=useState([])
    const[loading,setLoading]=useState(true)

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then((responce)=>{
          if(!responce.ok){
            throw new Error("error")
          }
          return responce.json()
        })
        .then((json)=>{
          setData(json)
            setLoading(false)

        }).catch((e)=>{
          console.log(e)
    })
  },[])





  return (
    <div className="App">
        <h1>Список дел</h1>
          <>
            {
                loading ?(
                    <div className="loading">.....</div>
                ): data.map((item)=>{
                    return(
                        <ul>
                            <li>
                                <p>
                                    <div key={item.id}>
                                        {item.title}
                                    </div>
                                </p>
                            </li>
                        </ul>
                    )
                })


            }
          </>
    </div>
  );
}
