import React from 'react';
import {Button} from "./Button";

interface TodoProps{
    handleDelete:(id:number) => void
    handleChecked:(id:number,completed:boolean) => void
    checking:boolean,
    completed:boolean,
    id:number,
    deleting:boolean,
    title:string,
    userId:number,
    users:any[]
}

export const Todo:React.FC<TodoProps> = ({handleChecked, handleDelete,checking,completed,id,deleting,title,userId,users}) => {

    const user = users.find((user)=>user.id === userId)

    return (
        <>
            {
                (
                    <div className="todo_wrapper">
                        <div className="checkbox">
                            {
                               (
                                    <input
                                        type="checkbox"
                                        checked={completed}
                                        onChange={()=>handleChecked(id,completed)}/>
                                )
                            }
                        </div>
                        <div className="todo">
                            {title}
                            <br/>
                           <b>
                               (email:{user.email})
                           </b>
                        </div>
                        <Button  handleDelete={handleDelete} deleting={deleting} id={id}/>

                    </div>
                )
            }
        </>
    );
}
