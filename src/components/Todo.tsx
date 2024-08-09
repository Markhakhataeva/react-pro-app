import React, {FC} from 'react';
import ReactLoading from "react-loading";
import {Button} from "./Button";

interface TodoProps{
    handleChecked:(id:number,completed:boolean) => void,
    handleDelete:(id:number) => void,
    checking:boolean,
    completed:boolean,
    deleting?:boolean,
    id:number,
    title:string

}
export const Todo:FC<TodoProps> = ({handleChecked,handleDelete,checking,completed,id,deleting,title}:TodoProps)=> {


    return (
        <>
            {
                (
                    <div className="todo_wrapper">
                        <div className="checkbox">
                            {
                                checking ? <ReactLoading color="#126fcf" type="spin" width={30} height={30} /> : (
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
                        </div>
                        <Button  handleDelete={handleDelete} deleting={deleting} id={id}/>

                    </div>
                )
            }
        </>
    );
}
