import React from 'react';
import Todo from './Todo';

const Todos = ({ todos = [], onComplete }) => {
  return (
    <section className="Todos">
      <h2>Todo : ({todos.length})</h2>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onComplete={onComplete} />
      ))}
    </section>
  );
};

export default Todos;
