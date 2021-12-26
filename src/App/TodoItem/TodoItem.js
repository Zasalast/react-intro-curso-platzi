import React, { useContext } from 'react'
import './TodoItem.css'
import { TodoContext} from './../../context/todoContext'
function TodoItem(props) {
  const {onComplete, descompleteTodo}=useContext(TodoContext)
/*   const onComplete = () => {
    alert('comple'+props.text)
  }
  const onDelete = () => {
    alert('eliminado'+props.text)
  } */
    return (
        <li className="TodoItem">
        <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}>
        √
        </span>
        <span className={`Icon Icon-delete Icon-check ${props.completed && 'Icon-check--desactive'}`}
          onClick={props.ondesComplete}>
        -
        </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
        </p>
       {/*   <span value="des active" className={`Icon Icon-delete Icon-check ${props.completed && 'Icon-check--desactive'}`}
        onClick={descompleteTodo}>
          -
      </span> */}
           <span
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        X
      </span>
    </li>
  );
}

export   {TodoItem}
