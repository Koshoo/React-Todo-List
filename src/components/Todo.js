import React from 'react';

const Todo = ({ todo, toggleDone, deleteTodo }) => {
  return (
    <li className="todo">
      <input
        className="toggle-done"
        type="checkbox"
        id={todo.id}
        checked={todo.done ? true : false}
        onChange={() => toggleDone(todo.id)}
      />
      <label
        htmlFor={todo.id}
        className={`todo-task ${todo.done ? 'done' : ''}`}
      >
        {todo.task}
      </label>
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
