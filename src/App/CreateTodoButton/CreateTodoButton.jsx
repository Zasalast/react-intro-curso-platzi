import React from 'react'
import "./CreateTodoButton.css"
function CreateTodoButton() {
    const onClickButton = (msn) => {
        alert(msn)
        console.log(msn)
    }
    return (
        <div>
         <button onClick={()=>onClickButton('modal')}>+</button>
        </div>
    )
}

export   {CreateTodoButton}
