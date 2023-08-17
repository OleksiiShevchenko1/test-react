import React, { useEffect, useState } from 'react';

export const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('работает');
  }, [counter]);

  const dicrement = () => {
    setCounter(prev => prev + 1);
  };
  const incriment = () => {
    setCounter(prev => prev - 1);
  };
  const reset = () => {
    setCounter(0);
  };
  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={incriment}>
        -
      </button>
      <button type="button" onClick={reset}>
        reset
      </button>
      <button type="button" onClick={dicrement}>
        +
      </button>
    </div>
  );
};
