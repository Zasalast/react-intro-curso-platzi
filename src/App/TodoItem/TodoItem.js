import React, { useContext } from 'react'
import './TodoItem.css'
import { TodoContext} from './../../context/todoContext'
function TodoItem(props) {
  const {    deleteTodo  } = useContext(TodoContext)
  const {text,completed,unchecktodo,completeTodo}= props
 
    return (
        <li className="TodoItem">
        <span className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
        onClick={completeTodo}>
        √
        </span>
        <span className={`Icon Icon-delete Icon-check ${completed && 'Icon-check--desactive'}`}
          onClick={ unchecktodo}>
        -
        </span>
    {/*   <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
        {text}
        </p> */}
       <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
        {text}
        </p>
           <span
        className="Icon Icon-delete"
        onClick={deleteTodo}
      >
        X
      </span>
    </li>
  );
}

export   {TodoItem}
