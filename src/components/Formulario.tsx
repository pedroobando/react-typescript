import { ChangeEvent, useState } from "react";
import { Input } from "semantic-ui-react";

export const Formulario = () => {
  const [formulario, setFormulario] = useState({ email: "", nombre: "" });
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

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
