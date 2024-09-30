import { useReducer } from "react";

const initialState = { order: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { order: state.order + 1 };
    case 'decrement':
      return { order: state.order - 1 };
    default:
      return state;
  }
};

const useCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => dispatch({ type: 'increment' });
  const decrement = () => dispatch({ type: 'decrement' });

  return {
    order: state.order,
    increment,
    decrement
  };
};

export default useCounter;