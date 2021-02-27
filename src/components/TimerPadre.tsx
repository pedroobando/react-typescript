import { useState } from "react";
import { Button, Header } from "semantic-ui-react";
import { Timer } from "./Timer";

export const TimerPadre = () => {
  const [milisegundos, setMilisegundos] = useState(1000);
  return (
    <>
      <Header as="h3" color="blue">
        Milisegundos {milisegundos}
      </Header>
      <br />
      <Button color="green" basic onClick={() => setMilisegundos(1000)}>
        1000
      </Button>
      <Button color="blue" basic onClick={() => setMilisegundos(2000)}>
        2000
      </Button>
      <br />
      <Timer milisegundos={milisegundos} />
    </>
  );
};
