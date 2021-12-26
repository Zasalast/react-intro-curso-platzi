import React from 'react';
import { TodoIcon } from './TodoIcon';
import { TodoContext } from './../../context/todoContext'
function DeleteIcon({deleteTodo} ) {
   /*   const {    deleteTodo  } = useContext(TodoContext) */
  return (
    <TodoIcon
      type="delete"
      onClick={deleteTodo}
    />
  );
}

export { DeleteIcon };