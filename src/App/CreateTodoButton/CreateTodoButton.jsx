import React from 'react'
import "./CreateTodoButton.css"
import { TodoContext} from '../../context/todoContext'
function CreateTodoButton() {
    const {  setOpenModal}=React.useContext(TodoContext)
    const onClickButton = () => {
        setOpenModal(prevState=>!prevState)     
    }
    return (       
         <button onClick={()=>onClickButton()} className='CreateTodoButton'>+</button>      
    )
}
export   {CreateTodoButton}
