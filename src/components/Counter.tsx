import React, { useState } from "react";

import { Button, Header } from "semantic-ui-react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const incrementar = (numero: number = 6): void => {
    setCounter((e) => e + numero);
  };

  const reset = (): void => {
    setCounter(0);
  };

  return (
    <>
      <Header as="h3" context="Counter: useState" />
      <span> Valor: {counter}</span>
      <br />

      <Button content="+" basic primary onClick={() => incrementar(1)} />
      <Button content="+ 2" primary onClick={() => incrementar(2)} />

      <Button content="RESET" basic color="red" onClick={() => reset()} />
    </>
  );
};

export default Counter;
