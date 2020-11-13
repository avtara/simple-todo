import React, { useCallback, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

import Todos from './Todos';
import NewTodo from './NewTodo';

import initialState from './initialState';

const TODO_ADD = 'TODO_ADD';
const TODO_COMPLETE = 'TODO_COMPLETE';

const reducer = (state, action) => {
  if (action.type === TODO_ADD) {
    return [action.payload, ...state];
  }

  if (action.type === TODO_COMPLETE) {
    return state.map((todo) => {
      if (todo.id !== action.payload.id) return todo;
      return { ...todo, complete: !todo.complete };
    });
  }
  return state;
};

const App = () => {
  const [todos, dispatch] = useReducer(reducer, initialState);
  console.log(todos);

  const addTodo = useCallback(
    ({ person, note }) => {
      dispatch({
        type: TODO_ADD,
        payload: {
          person,
          note,
          complete: false,
          id: uuidv4(),
        },
      });
    },
    [dispatch]
  );

  const toggleComplete = useCallback(
    (id) => {
      dispatch({
        type: TODO_COMPLETE,
        payload: {
          id,
        },
      });
    },
    [dispatch]
  );

  return (
    <div className="App">
      <NewTodo onSubmit={addTodo} />
      <Todos todos={todos} onComplete={toggleComplete} />
    </div>
  );
};

export default App;
