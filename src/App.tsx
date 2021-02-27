import React from "react";
import "./CalendarApp.css";
import Counter from "./components/Counter";
import { TimerPadre } from "./components/TimerPadre";
import Usuario from "./components/Usuario";

const App = () => {
  return (
    <>
      <h1>Hola Mundo</h1>
      <Counter />
      <Usuario />
      <hr />
      <TimerPadre />
    </>
  );
};

export default App;
