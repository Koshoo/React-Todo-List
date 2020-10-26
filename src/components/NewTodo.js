import React, { useState } from 'react';

const NewTodo = ({ createTodo }) => {
  const [task, setTask] = useState('');
  const [notification, setNotification] = useState(null);

  const handleNewTodo = (e) => {
    e.preventDefault();
    if (task.trim()) {
      createTodo({ task });
    } else {
      setNotification('Please type a task');
      setTimeout(() => {
        setNotification(null);
      }, 3000);
    }
    setTask('');
  };

  return (
    <div className="todo-form">
      <form onSubmit={handleNewTodo}>
        <input
          type="text"
          className="new-todo"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="What do you need to do?"
        />
        <button type="submit" className="add-todo-button">
          Add
        </button>
      </form>
      <p className="notification">{notification}</p>
    </div>
  );
};

export default NewTodo;
