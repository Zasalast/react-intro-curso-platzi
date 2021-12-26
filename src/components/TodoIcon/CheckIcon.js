import React from 'react';
import { TodoIcon } from './TodoIcon';

function CheckIcon({ completed, completeTodo }) {
  return (
    <TodoIcon
      type="check"
      color={completed ? '#4caf50' : 'gray'}
      onClick={completeTodo}
    />
  );
}

export { CheckIcon };