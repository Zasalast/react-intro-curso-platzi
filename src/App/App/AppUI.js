 import React from 'react';
 
import {TodoCounter} from '../TodoCounter/TodoCounter';
import {TodoSearch} from '../TodoSearch/TodoSearch';
import {TodoList} from '../TodoList/TodoList';
import {CreateTodoButton} from '../CreateTodoButton/CreateTodoButton';
import {TodoItem} from '../TodoItem/TodoItem';

 
function AppUI({
    error,
    loading,
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchTodos,
  completeTodo,
  deleteTodo,
}) {
 
  return (
    < >
     
      <TodoCounter 
        completedTodos={completedTodos}
        totalTodos={totalTodos}
      />
      <TodoSearch searchValue={searchValue}
        setSearchValue={setSearchValue} />
      
          <TodoList>    
              {
              error&& <p>desesperate, ocurrio un error...</p>
              }
              {
              loading && <p>No desesperes, estamos cargando...</p>
              }
              {
(!loading && !searchTodos.length)&& <p>Crea tu primera tarea</p>
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
      <CreateTodoButton/>
    </>
  );
}

export  {AppUI};
