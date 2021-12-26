import React from 'react'
import { TodoContext } from '../../context/todoContext';
import './TodoCounter.css'
function TodoCounter() {
     const { completedTodos, totaltodos } = React.useContext(TodoContext)
    return (
        <div>
       <h1 className="TodoCounter">Has completado {completedTodos} de {totaltodos} Todos</h1>
        </div>
    )
}
export {TodoCounter};