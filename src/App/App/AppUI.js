import React from 'react';
 import ContentLoader from 'react-content-loader'

  import './../../Modal/index.css'
import { TodoCounter } from '../TodoCounter/TodoCounter';
import {TodoContext} from '../../context/todoContext';
import {TodoSearch} from '../TodoSearch/TodoSearch';
import {TodoList} from '../TodoList/TodoList';
import {CreateTodoButton} from '../CreateTodoButton/CreateTodoButton';
import {TodoItem} from '../TodoItem/TodoItem';
import {Modal} from './../../Modal/index'
import { TodoForm } from '../TodoForm';

 
function AppUI() {
  
  const {
          error,
          loading,
          searchTodos,
          completeTodo,
    deleteTodo,
    openModal,
      unchecktodo
        } = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />    
          <TodoList>
        {
          error && <p>desesperate, ocurrio un error...</p>
        }
        {
          loading && <p><ContentLoader
             rtl
      speed={2}
         width={"100%"}
    height={160}
    viewBox="0 0 100% 160"
      backgroundColor="#d9d9d9"
      foregroundColor="#ededed"
     /*  {...props} */
    >  
     <rect x="0" y="0"   width="100%" height="38" />
      <rect x="0" y="40"   width="100%" height="38" />
       
      <rect x="0" y="80"   width="100%" height="38" />
      <rect x="0" y="120"   width="100%" height="38" />
    </ContentLoader></p>
        }
        {
          (!loading && !searchTodos.length) && <p>Crea tu primera tarea</p>
        }
        {searchTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            completeTodo={() => completeTodo(todo.text)}
            unchecktodo ={() => unchecktodo(todo.text)}
            deleteTodo={() => deleteTodo(todo.text)}
               />
            ))}
             </TodoList>
      {openModal && <Modal><div>
  
 <TodoForm/>
      </div>
     
    </Modal>}

      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };
