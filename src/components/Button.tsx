import React, {FC} from 'react';


interface ButtonProps  {
    handleDelete:(id:number) => void,
    deleting?:boolean,
    id:number
}
export const Button:FC<ButtonProps> = ({handleDelete,deleting,id}:ButtonProps) => {
    return (
        <>
            {
                <div className="button">
                    <button onClick={() => handleDelete(id)}
                            disabled={deleting}>
                        Удалить
                    </button>
                </div>
            }
        </>
    );
}

