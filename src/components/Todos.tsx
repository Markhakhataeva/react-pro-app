import React from 'react';
import {Todo} from "./Todo";
import {useTypedSelector} from "../hooks";

interface TodosProps{
    handleDelete:(id:number) => void
    handleChecked:(id:number,completed:boolean) => void
}


export const Todos:React.FC<TodosProps> = ({handleChecked,handleDelete}) => {
    const todos = useTypedSelector((state)=>state.todos)
    const users = useTypedSelector((state)=>state.users)



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

