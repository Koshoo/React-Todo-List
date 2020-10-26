import React from 'react';
import Todo from './Todo';

const Todos = ({ todos = [], toggleDone, deleteTodo }) => {
  return (
    <div>
      {todos.length === 0 ? (
        <p className="no-todos">Nothing Here...</p>
      ) : (
        <ul className="todos-container">
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              toggleDone={toggleDone}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Todos;
