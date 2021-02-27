import React, { useRef, useState, useEffect } from "react";
import { Header, Icon } from "semantic-ui-react";

type TimerArgs = {
  milisegundos: number;
  reset?: object;
};

export const Timer = ({ milisegundos }: TimerArgs) => {
  const [segundos, setSegundos] = useState(0);

  const ref = useRef<NodeJS.Timeout>();
  useEffect(() => {
    ref.current && clearInterval(ref.current);
    ref.current = setInterval(() => setSegundos((s) => s + 1), milisegundos);
  }, [milisegundos]);
  return (
    <>
      <Header as="h3" color="blue">
        <Icon name="time" />
        <Header.Content>Timer: {segundos}</Header.Content>
      </Header>
    </>
  );
};
