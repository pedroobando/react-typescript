import { Container, Icon, Header } from "semantic-ui-react";
import { ContadorRed } from "./components/ContadorRed";
import Counter from "./components/Counter";
import { TimerPadre } from "./components/TimerPadre";
import Usuario from "./components/Usuario";

const App = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Header as="h1" content="TypeScript en ReactJs" color="orange" />
        <Header as="h3" color="green" style={{ marginTop: "70px" }}>
          <Icon name="setting" />
          <Header.Content>useState</Header.Content>
        </Header>
        <Counter />
        <Usuario />

        <Header as="h3" color="green" style={{ marginTop: "70px" }}>
          <Icon name="setting" />
          <Header.Content>useEffect + useRef</Header.Content>
        </Header>
        <TimerPadre />

        <Header as="h3" color="green" style={{ marginTop: "70px" }}>
          <Icon name="setting" />
          <Header.Content>useReducer</Header.Content>
        </Header>
        <ContadorRed />
      </Container>
    </>
  );
};

export default App;
