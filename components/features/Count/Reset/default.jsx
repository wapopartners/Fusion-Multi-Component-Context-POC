import React, { useContext } from 'react';
import { useFusionContext } from 'fusion:context';
import CountContext from '../../../../context/CountContext';

const Reset = () => {
  const countContext = useContext(CountContext);

  if (!countContext) {
    const { isAdmin } = useFusionContext();
    if (isAdmin) return <div>"Reset" should only be used with the basic layout</div>;
    return null;
  }

  const { canReset, reset } = countContext;
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
