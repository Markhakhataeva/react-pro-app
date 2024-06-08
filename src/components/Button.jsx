import React from 'react';

function Button({handleDelete,deleting,id}) {
    return (
        <>
            {
                <div className="button">
                    <button onClick={() => handleDelete(id)}
                            disabled={deleting}
                    >Удалить
                    </button>
                </div>
            }
        </>
    );
}

export default Button;