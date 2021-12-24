 
import './App.css';
 
import React from 'react';
import { AppUI } from './AppUI'
import { useLocalStorage} from './../../hooks/useLocalStorage'
const defaulTodos = [
  { text: 'Cortar cebolla', completed: true},
  { text: 'Tomar el curso de intro a React', completed: false},
  { text: 'Llorar con la llorona', completed: false},
]
function App() {
 
/*   const localStorageTodos = localStorage.getItem('TODOS_V1')
  let parsedTodos; */

/*   if (!localStorageTodos) {
     localStorage.setItem('TODOS_V1', JSON.stringify(defaulTodos));
    parsedTodos = defaulTodos;
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  } */

/*   const saveTodos = (newTodos) => {
    const stringifyTodos= JSON.stringify(newTodos)
    localStorage.setItem('TODOS_V1', stringifyTodos)
    setTodosValue(newTodos)
  } */
//const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);

 const {item:todosValue,
    saveItem: saveTodos,loading,error} = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  
  const completedTodos = todosValue.filter(todosValue => !!todosValue.completed).length
  const notCompletedTodos = todosValue.filter(todosValue => !todosValue.completed).length
  const totaltodos = todosValue.length

  let searchTodos = []
  if (!searchValue.length >= 1) {
    searchTodos=todosValue 
  } else {
    searchTodos = todosValue.filter(
      todo =>{
      const todoText= todo.text.toLowerCase()
      const  searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)}
      )    
  }
  
//JSON.stringify([{}])
  //const aaa=JSON.stringify([{}])
  //JSON.parse(aaa)
  ///localStorage.setItem('ejemplotodos',aaa)
    ///localStorage.getItem('ejemplotodos')
   //JSON.parse(localStorage.getItem('ejemplotodos'))
  const completeTodo=(text)=> {
    const todoIndex = todosValue.findIndex(todo => todo.text === text)
    const newTodos = [...todosValue]
    newTodos[todoIndex].completed = true
 
    saveTodos(newTodos)
  }
  
   const deleteTodo=(text)=> {
    const todoIndex = todosValue.findIndex(todo => todo.text === text)
    const newTodos = [...todosValue]
    newTodos.splice(todoIndex,1)
    saveTodos(newTodos)
    }
  return (
    < >
     
      <AppUI
        error={error}
        loading={loading}
        totaltodos={totaltodos}
        completedTodos={completedTodos}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
               searchTodos={searchTodos}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
          />
    </>
  );
}

export default App;
