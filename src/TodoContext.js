import React, { useReducer, useCallback, createContext } from 'react';

import { v4 as uuidv4 } from 'uuid';
import initialState from './initialState';

export const TodoContext = createContext();

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

export const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(reducer, initialState);

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

  const value = { todos, addTodo, toggleComplete };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
