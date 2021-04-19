import React, { useContext } from 'react';
import { useFusionContext } from 'fusion:context';
import CountContext from '../../../../context/CountContext';

const Decrementor = () => {
  const countContext = useContext(CountContext);

  if (!countContext) {
    const { isAdmin } = useFusionContext();
    if (isAdmin) return <div>"Decrementor" should only be used with the basic layout</div>;
    return null;
  }

  const { canDecrement, decrement } = countContext;
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
