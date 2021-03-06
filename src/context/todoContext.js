import React from "react";
import { useLocalStorage} from '../hooks/useLocalStorage'
const TodoContext = React.createContext();

function TodoProvider(props) {
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
  const [openModal, setOpenModal] = React.useState(false)
  
 const {item:todosValue,
   saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', []);
  
  const [searchValue, setSearchValue] = React.useState('');
  
    const completedTodos = todosValue.filter(todosValue => !!todosValue.completed).length
    
     
    
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
 /*  [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'Llorar con la llorona', completed: true },
  { text: 'LALALALAA', completed: false },
] */
    ///localStorage.getItem('ejemplotodos')
   //JSON.parse(localStorage.getItem('ejemplotodos'))
  const completeTodo=(text)=> {
    const todoIndex = todosValue.findIndex(todo => todo.text === text)
    const newTodos = [...todosValue]
    newTodos[todoIndex].completed = true
 
    saveTodos(newTodos)
  }

   const unchecktodo=(text)=> {
    const todoIndex = todosValue.findIndex(todo => todo.text === text)
    const newTodos = [...todosValue]
    newTodos[todoIndex].completed = false 
    saveTodos(newTodos)
   }
  
   const deleteTodo=(text)=> {
    const todoIndex = todosValue.findIndex(todo => todo.text === text)
    const newTodos = [...todosValue]
    newTodos.splice(todoIndex,1)
    saveTodos(newTodos)
   }
  
   const addTodo=(text)=> {  
    const newTodos = [...todosValue]
    newTodos.push({completed:false,text,})
    saveTodos(newTodos)
    }
    return (
      <TodoContext.Provider value={{
            error,
        loading,
        totaltodos,
        completedTodos,
        
        searchValue,
        setSearchValue,
               searchTodos,
        completeTodo,
        unchecktodo,
        deleteTodo,
        openModal,
        setOpenModal,
        addTodo
      }}>
      {props.children}
    </TodoContext.Provider>
  );
}
        export {TodoContext,TodoProvider}