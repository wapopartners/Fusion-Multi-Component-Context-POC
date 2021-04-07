import { useEffect, useReducer } from 'react';
import CountContext from './CountContext';

function generateInitialState() {
  return {
    count: 0,
    canDecrement: false,
    canReset: false,
  };
}

function reducer(state, action) {
  let count;
  switch (action.type) {
    case 'increment':
      count = state.count + 1;
      return {
        count,
        canDecrement: count > 0,
        canReset: count !== 0,
      };
    case 'decrement':
      count = state.canDecrement ? state.count - 1 : 0;
      return {
        count,
        canDecrement: count > 0,
        canReset: count !== 0,
      };
    case 'reset':
      return generateInitialState();
    default:
      throw new Error();
  }
}

const CountProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, generateInitialState());

  useEffect(() => {
    dispatch({
      type: 'reset',
    });
  }, [dispatch]);

  return (
    <CountContext.Provider
      value={{
        ...state,
        increment: () => dispatch({ type: 'increment' }),
        decrement: () => dispatch({ type: 'decrement' }),
        reset: () => dispatch({ type: 'reset' }),
      }}
    >
      {children}
    </CountContext.Provider>
  );
};

export default CountProvider;
