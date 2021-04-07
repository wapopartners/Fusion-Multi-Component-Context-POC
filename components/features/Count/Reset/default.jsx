import React, { useContext } from 'react';
import CountContext from '../../../../context/CountContext';

const Reset = () => {
  const { canReset, reset } = useContext(CountContext);
  return (
    <button
      disabled={!canReset}
      onClick={() => reset()}
    >
      Reset
    </button>
  );
};

export default Reset;
