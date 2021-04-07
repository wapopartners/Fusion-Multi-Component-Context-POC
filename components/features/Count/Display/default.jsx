import React, { useContext } from 'react';
import CountContext from '../../../../context/CountContext';

const CountDisplay = () => {
  const { count } = useContext(CountContext);
  return <h2>{`Count: ${count}`}</h2>;
};

export default CountDisplay;
