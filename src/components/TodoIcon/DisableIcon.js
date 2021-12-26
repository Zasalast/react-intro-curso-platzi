import React from 'react';
import { TodoIcon } from './TodoIcon';
 
const DisableIcon = ({ completed, unchecktodo }) => { 
  return (
    <div> 
    <TodoIcon
      type="disable"
      color={completed ? '#4caf50' : 'gray'}
      onClick={unchecktodo}
      />
      </div>
  );
}

export { DisableIcon };