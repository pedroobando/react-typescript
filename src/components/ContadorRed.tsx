import React, { useReducer } from "react";
import { Button, Header, Icon } from "semantic-ui-react";

const initialState = {
  contador: 10,
};

type ActionType =
  | { type: "incrementar" }
  | { type: "decrementar" }
  | { type: "custon"; payload: number };

const contadorReducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case "incrementar":
      return {
        ...state,
        contador: state.contador + 1,
      };

    case "decrementar":
      return {
        ...state,
        contador: state.contador - 1,
      };

    case "custon":
      return {
        ...state,
        contador: action.payload,
      };

    default:
      return state;
  }
};

export const ContadorRed = () => {
  const [contadorState, dispatch] = useReducer(contadorReducer, initialState);
  return (
    <>
      <Header as="h2" color="teal" content={contadorState.contador} />

      <Button
        icon
        basic
        labelPosition="left"
        color="red"
        onClick={() => dispatch({ type: "decrementar" })}
      >
        <Icon name="arrow left" />
        -1
      </Button>

      <Button
        icon
        labelPosition="right"
        basic
        color="green"
        onClick={() => dispatch({ type: "incrementar" })}
      >
        +1
        <Icon name="arrow right" />
      </Button>

      <Button
        basic
        color="green"
        onClick={() => dispatch({ type: "custon", payload: 100 })}
      >
        100
      </Button>
    </>
  );
};
