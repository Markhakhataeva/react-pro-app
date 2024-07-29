import React from 'react';
import {useSelector} from "react-redux";
import {Todo} from "./Todo";

export const Todos = ({handleChecked,handleDelete}) => {
    const todos = useSelector((state)=>state.todos.todos)
    const users = useSelector((state)=>state.users.users)



    return (
        <>
            {
                (
                    todos.map((item)=>{
                        return <Todo id={item.id} key={item.id} handleDelete={handleDelete} handleChecked={handleChecked}
                        completed={item.completed} checking={item.checking}
                        deleting={item.deleting} title={item.title} userId={item.userId} users={users}/>
                    }
                    ))
            }

        </>
    );
}

