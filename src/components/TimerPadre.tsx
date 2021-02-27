import { useState } from "react";
import { Button } from "semantic-ui-react";
import { Timer } from "./Timer";

export const TimerPadre = () => {
  const [milisegundos, setMilisegundos] = useState(1000);
  return (
    <>
      <span>Milisegundos {milisegundos}</span>
      <br />

      <Button color="green" basic onClick={() => setMilisegundos(1000)}>
        1000
      </Button>

      <Button color="blue" basic onClick={() => setMilisegundos(2000)}>
        2000
      </Button>

      <Timer milisegundos={milisegundos} />
      <hr />
    </>
  );
};
