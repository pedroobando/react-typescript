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
      <Header as="h3" color="olive">
        Valor: {counter}
      </Header>

      <Button content="-1" basic color="orange" onClick={() => incrementar(-1)} />
      <Button content="+" basic color="green" onClick={() => incrementar(1)} />
      <Button content="+ 2" primary basic onClick={() => incrementar(2)} />

      <Button content="RESET" color="red" onClick={() => reset()} />
    </>
  );
};

export default Counter;
