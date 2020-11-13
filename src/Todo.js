import React, { memo, useContext } from 'react';
import { TodoContext } from './TodoContext';

const todo = memo(({ todo, onComplete }) => {
  const { toggleComplete } = useContext(TodoContext);
  const complete = () => toggleComplete(todo.id);
  return (
    <article className="Todo">
      <h3>{todo.person}</h3>
      <p>{todo.note}</p>
      <div className="Todo-controls">
        <label className="Todo-complete">
          <input type="checkbox" checked={todo.complete} onChange={complete} />{' '}
          Complete
        </label>
      </div>
    </article>
  );
});

export default todo;
