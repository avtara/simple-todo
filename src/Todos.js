import React, { useContext } from 'react';
import Todo from './Todo';
import { TodoContext } from './TodoContext';

const Todos = () => {
  const { todos } = useContext(TodoContext);
  return (
    <section className="Todos">
      <h2>Todo : ({todos.length})</h2>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </section>
  );
};

export default Todos;
