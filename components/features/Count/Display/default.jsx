import React, { useContext } from 'react';
import { useFusionContext } from 'fusion:context';
import CountContext from '../../../../context/CountContext';

const CountDisplay = () => {
  const countContext = useContext(CountContext);

  if (!countContext) {
    const { isAdmin } = useFusionContext();
    if (isAdmin) return <div>"Count Display" should only be used with the basic layout</div>;
    return null;
  }

  const { count } = countContext;
  return <h2>{`Count: ${count}`}</h2>;
};

export default CountDisplay;
