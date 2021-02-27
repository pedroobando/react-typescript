import React, { useState } from "react";
import { Button, Header, Icon } from "semantic-ui-react";

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

  const logout = (): void => {
    setUser(tempUser);
  };

  return (
    <>
      <Header as="h3" color="green">
        <Icon name="user" />
        <Header.Content>useState: usuario</Header.Content>
      </Header>

      <Button basic primary content="Login" onClick={login} />
      <Button basic color="purple" content="Logout" onClick={logout} />

      {!user ? (
        <pre style={{ color: "red", fontSize: "bold" }}>No hay usuario</pre>
      ) : (
        <pre style={{ margin: "20px 0" }}>{JSON.stringify(user)}</pre>
      )}
    </>
  );
};

export default Usuario;
