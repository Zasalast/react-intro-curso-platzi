import React from 'react'
import { TodoContext } from '../../context/todoContext'
import './index.css'
const TodoForm = () => {
    const { addTodo, setOpenModal } = React.useContext(TodoContext)
    const [newTodoValue,setNewTodoValue]= React.useState('')
    const onCancel = () => {
           setOpenModal(false)
    }
    const onSubmit = (event) => {
         event.preventDefault();
        if(newTodoValue.length <= 0)return;
         addTodo(newTodoValue);
        console.log('submit')
    }

     const onChange = (event) => {
          
         setNewTodoValue(event.target.value);
     }
    
    const onKeyUp = (e) => {
    if (e.charCode === 13) {
      e.preventDefault();
      addTodo(newTodoValue);
      onCancel();
    }
  };
    return (
        <form onSubmit={onSubmit} onKeyPress={onKeyUp}>
      <label>Create one new To Do</label>
      <textarea
         value = {newTodoValue}
        onChange = {onChange} 
        placeholder = "Add one new to do"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button-cancel"
          onClick = {onCancel}
        >
          Cancelar
        </button>

        <button
          className="TodoForm-button TodoForm-button-add"
                    type="submit"
                     
        >
          Añadir
          </button>
      </div>
    </form>
    )
}

export {TodoForm}