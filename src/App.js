import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todos from './components/Todos';
import NewTodo from './components/NewTodo';
import Filter from './components/Filter';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  );
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const createTodo = (newTodo) => {
    const todo = { ...newTodo, done: false, id: uuidv4() };
    setTodos(todos.concat(todo));
  };

  const toggleDone = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    const changedTodo = { ...todo, done: !todo.done };
    setTodos(todos.map((todo) => (todo.id === id ? changedTodo : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const todosToShow =
    filter === 'done'
      ? todos.filter((todo) => todo.done)
      : filter === 'not-done'
      ? todos.filter((todo) => !todo.done)
      : todos;

  return (
    <div className="todo-app">
      <h1 className="title">Todo List</h1>
      <NewTodo createTodo={createTodo} />
      <Filter handleFilterChange={handleFilterChange} />
      <Todos
        todos={todosToShow}
        toggleDone={toggleDone}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default App;
