import { Input } from "semantic-ui-react";
import { useForm } from "../hooks/useForm";

interface FormData {
  email: string;
  nombre: string;
  edad: number;
}

export const Formulario = () => {
  const { formulario, handleChange } = useForm<FormData>({
    email: "pedroobando@hot.com",
    nombre: "pedro",
    edad: 49,
  });

  const { email, edad, nombre } = formulario;

  return (
    <form autoComplete="off">
      <Input
        icon="mail"
        iconPosition="left"
        placeholder="email..."
        name="email"
        value={email}
        onChange={handleChange}
        style={{ width: "400px", marginTop: "20px" }}
      />
      <br />
      <Input
        icon="user"
        iconPosition="left"
        placeholder="nombre..."
        name="nombre"
        value={nombre}
        onChange={handleChange}
        style={{ width: "400px", marginTop: "20px" }}
      />

      <br />
      <Input
        icon="road"
        iconPosition="left"
        placeholder="edad..."
        name="edad"
        value={edad}
        onChange={handleChange}
        style={{ width: "400px", marginTop: "20px" }}
      />

      <pre>{JSON.stringify(formulario)}</pre>
    </form>
  );
};
