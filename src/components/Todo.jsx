import React from 'react';
import ReactLoading from "react-loading";
import Button from "./Button";

export const Todo=({handleChecked,handleDelete,checking,completed,id,deleting,title})=> {
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
                        </div>
                        <Button  handleDelete={handleDelete} deleting={deleting} id={id}/>

                    </div>
                )
            }
        </>
    );
}
