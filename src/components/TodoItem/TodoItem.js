import React, { useContext } from 'react'
import './TodoItem.css';
import { TodoContext } from '../../context/todoContext'
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox, MdDeleteOutline, MdUndo } from "react-icons/md";
import { DeleteIcon } from '../TodoIcon/ DeleteIcon'
import { CheckIcon} from '../TodoIcon/CheckIcon'
import {DisableIcon} from '../TodoIcon/DisableIcon'
function TodoItem(props) {
  const {    deleteTodo  } = useContext(TodoContext)
  const {text,completed,unchecktodo,completeTodo}= props
 
    return (
      <li className="TodoItem">
       <span   className={`Icon Icon-delete Icon-check ${completed && 'Icon-check--desactive'}`}
          onClick={ unchecktodo}>
         <MdOutlineCheckBoxOutlineBlank/>{/* <DisableIcon completed={props.completed}
        unchecktodo={props.unchecktodo}/> */}
        </span> 
     <span className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
        onClick={completeTodo}>
        <MdOutlineCheckBox/>
          {/* <CheckIcon
        completed={completed}
        completeTodo={completeTodo}
        /> */}</span> 
        
        <p
        className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}
      >
        {text}
      </p>   <DeleteIcon
        deleteTodo={deleteTodo}
      /></li>
  );
}

export   {TodoItem}
