
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadTodos, removePhoto} from "./action";
import {Header} from "./Header";

export const App = () => {
     const photos = useSelector((state)=>state.photos)
     const loading = useSelector((state)=>state.loading)
     const dispatch = useDispatch();


     useEffect(()=>{
         dispatch(loadTodos())
     },[])

    const handleDelete = (id) => {
         dispatch(removePhoto(id))
    }

  return (
    <div className="App">
          <Header />
              {
                loading  ? ".....":(
                  photos.map((item)=>{
                  return (
                      <div className="photo_wrapper">

                          <div className="photo">
                              <img src={item.url} alt=""/>
                          </div>
                          <div className="button">
                              <button onClick={()=>handleDelete(item.id)}>Удалить</button>
                          </div>

                      </div>
                  )
                  })
                )
              }

    </div>
  );
}
