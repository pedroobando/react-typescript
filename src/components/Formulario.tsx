import { Input } from "semantic-ui-react";

export const Formulario = () => {
  return (
    <form autoComplete="off">
      <Input
        icon="mail"
        iconPosition="left"
        placeholder="email..."
        name="email"
        onChange={handleChange}
        style={{ width: "400px", marginTop: "20px" }}
      />
      <br />
      <Input
        icon="user"
        iconPosition="left"
        placeholder="nombre..."
        name="nombre"
        onChange={handleChange}
        style={{ width: "400px", marginTop: "20px" }}
      />

      <pre>{JSON.stringify(formulario)}</pre>
    </form>
  );
};
