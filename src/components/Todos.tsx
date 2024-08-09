import React, {FC} from 'react';
import {Todo} from "./Todo";
import {useTypedSelector} from "../hooks/useTypedSelector";


interface  TodosProps{
    handleChecked:(id:number,completed:boolean) => void,
    handleDelete:(id:number) => void,
}
export const Todos:FC<TodosProps> = ({handleChecked,handleDelete}:TodosProps) => {
    const todos = useTypedSelector((state)=>state.todos.todos)

    return (
        <>
            {
                (
                    todos.map((item)=>{
                        return <Todo id={item.id} key={item.id} handleDelete={handleDelete} handleChecked={handleChecked}
                        completed={item.completed} checking={item.checking}
                        deleting={item.deleting} title={item.title}/>
                    }
                    ))
            }

        </>
    );
}

