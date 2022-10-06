import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Alert from "../components/Alert";

const ContactPage = () => {
  const [message, setMessage] = useState({ email: "", description: "" });

  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    (message.email.length && message.description.length > 0)
      ? navigate("/") : <Alert/>;
  };

  const handleOnChange = (e, property) => {
    setMessage({ ...message, [property]: e.target.value });
  };

  return (
    <div className="container">
      <h2>Cuentanos, ¿en que te podemos ayudar?</h2>
      <form onSubmit={handleOnSubmit}>
        <div className="box-field">
          <label htmlFor="email">Correo:</label>
          <input
            type="email"
            id="email"
            placeholder="usuario@ejemplo.com"
            onChange={(e) => {
              handleOnChange(e, "email");
            }}
          />
        </div>
        <div className="box-field">
          <label htmlFor="description">Descripción:</label>
          <textarea
            id="description"
            cols="30"
            rows="5"
            placeholder="Escribe un comentario..."
            onChange={(e) => {
              handleOnChange(e, "description");
            }}
          ></textarea>
        </div>
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default ContactPage;
