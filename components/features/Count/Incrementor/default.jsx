import React, { useContext } from 'react';
import CountContext from '../../../../context/CountContext';

const Incrementor = () => {
  const { increment } = useContext(CountContext);
  return (
    <button
      onClick={() => increment()}
    >
      Increment
    </button>
  );
};

export default Incrementor;
