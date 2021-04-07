import React, { useContext } from 'react';
import CountContext from '../../../../context/CountContext';

const Decrementor = () => {
  const { canDecrement, decrement } = useContext(CountContext)
  return (
    <button
      disabled={!canDecrement}
      onClick={() => decrement()}
    >
      Decrement
    </button>
  );
};

export default Decrementor;
