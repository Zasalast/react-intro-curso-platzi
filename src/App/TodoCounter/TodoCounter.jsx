import React from 'react'
import './TodoCounter.css'
 function TodoCounter({completedTodos,totaltodos}) {
    return (
        <div>
       <h1 className="TodoCounter">Has completado {completedTodos} de {totaltodos} Todos</h1>
        </div>
    )
}
export {TodoCounter};