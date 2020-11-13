import React, { memo } from 'react';

const todo = memo(({ todo, onComplete }) => {
  const complete = () => onComplete(todo.id);
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
