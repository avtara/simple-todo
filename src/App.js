import React from 'react';
import './App.css';

import Todos from './Todos';
import NewTodo from './NewTodo';

const App = () => {
  return (
    <div className="App">
      <NewTodo />
      <Todos />
    </div>
  );
};

export default App;
