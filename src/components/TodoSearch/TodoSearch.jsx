import React from 'react'
import { TodoContext } from '../../context/todoContext'
import './TodoSearch.css'
  
function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext)

  const onSearchValueChange = (event) => {
    console.log(event.target.value)
    setSearchValue(event.target.value)
  }
    return (
        <div>
        <input className="TodoSearch" placeholder='search To Do'
          value={searchValue}
        onChange={onSearchValueChange}/>
        <p>{ searchValue}</p>
      </div>
      

    )
}

export   {TodoSearch}
