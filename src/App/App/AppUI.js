 import React from 'react';
 
import { TodoCounter } from '../TodoCounter/TodoCounter';
import {TodoContext} from '../context/todoContext';
import {TodoSearch} from '../TodoSearch/TodoSearch';
import {TodoList} from '../TodoList/TodoList';
import {CreateTodoButton} from '../CreateTodoButton/CreateTodoButton';
import {TodoItem} from '../TodoItem/TodoItem';

 
function AppUI() {
 
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoContext.Consumer>
        {({
          error,
          loading,
          searchTodos,
          completeTodo,
          deleteTodo
        }) => (
          <TodoList>
        {
          error && <p>desesperate, ocurrio un error...</p>
        }
        {
          loading && <p>No desesperes, estamos cargando...</p>
        }
        {
          (!loading && !searchTodos.length) && <p>Crea tu primera tarea</p>
        }
        {searchTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
               />
            ))}
             </TodoList>
        )}
      </TodoContext.Consumer>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };
