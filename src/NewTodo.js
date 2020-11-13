import React, { memo, useState } from 'react';

const NewTodo = memo(({ onSubmit }) => {
  const [person, setPerson] = useState('');
  const [note, setNote] = useState('');

  const handleChange = (event) => {
    event.preventDefault();
    onSubmit({ person, note });
  };

  return (
    <form className="NewTodo" onSubmit={handleChange}>
      <input
        className="NewGrudge-input"
        placeholder="Person"
        type="text"
        value={person}
        onChange={(event) => setPerson(event.target.value)}
      />
      <input
        className="NewTodo-input"
        placeholder="Reason"
        type="text"
        value={note}
        onChange={(event) => setNote(event.target.value)}
      />
      <input className="NewGrudge-submit button" type="submit" />
    </form>
  );
});

export default NewTodo;
