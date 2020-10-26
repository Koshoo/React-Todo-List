import React from 'react';

const Todo = ({ todo, toggleDone, deleteTodo }) => {
  return (
    <li className="todo">
      <p
        onClick={() => toggleDone(todo.id)}
        className={`todo-task ${todo.done ? 'done' : ''}`}
      >
        {todo.task}
      </p>
      <i
        className="fa fa-trash fa-2x delete-button"
        aria-hidden="true"
        title="Delete"
        onClick={() => deleteTodo(todo.id)}
      ></i>
    </li>
  );
};
export default Todo;
