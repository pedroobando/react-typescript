import React, { useState } from "react";
import { Button, Container, Header } from "semantic-ui-react";

interface User {
  uid: string;
  name: string;
}

const tempUser: User = {
  uid: "XYYZ456",
  name: "Juan",
};

const Usuario = () => {
  const [user, setUser] = useState<User>(tempUser);

  const login = (): void => {
    setUser({
      uid: "ABC123",
      name: "Pedro Obando",
    });
  };

  return (
    <Container>
      <Header as="h2" content="Usuario: useState" style={{ margin: "20px 0" }} />

      <Button basic primary content="Login" onClick={login} />

      {!user ? (
        <pre style={{ color: "red", fontSize: "bold" }}>No hay usuario</pre>
      ) : (
        <pre style={{ margin: "20px 0" }}>{JSON.stringify(user)}</pre>
      )}
    </Container>
  );
};

export default Usuario;
