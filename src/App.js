import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

import Todos from './Todos';
import NewTodo from './NewTodo';

import initialState from './initialState';

const App = () => {
  const [todos, setTodos] = useState(initialState);
  console.log(todos);

  const addTodo = (todo) => {
    todo.id = uuidv4();
    todo.complete = false;
    setTodos([todo, ...todos]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return { ...todo, complete: !todo.complete };
      })
    );
  };

  return (
    <div className="App">
      <NewTodo onSubmit={addTodo} />
      <Todos todos={todos} onComplete={toggleComplete} />
    </div>
  );
};

export default App;
