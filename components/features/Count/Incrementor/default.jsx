import React, { useContext } from 'react';
import { useFusionContext } from 'fusion:context';
import CountContext from '../../../../context/CountContext';

const Incrementor = () => {
  const countContext = useContext(CountContext);

  if (!countContext) {
    const { isAdmin } = useFusionContext();
    if (isAdmin) return <div>"Incrementor" should only be used with the basic layout</div>;
    return null;
  }

  const { increment } = countContext;
  return (
    <button
      onClick={() => increment()}
    >
      Increment
    </button>
  );
};

export default Incrementor;
