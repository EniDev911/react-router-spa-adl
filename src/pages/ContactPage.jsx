
const ContactPage = () => {
  return (
    <div className="container">
      <h2>Cuentanos, ¿en que te podemos ayudar?</h2>
    <form>
      <div className="box-field">
        <label htmlFor="email">Correo:</label>
        <input type="email" id="email" placeholder="usuario@ejemplo.com"/>
      </div>
      <div className="box-field">
        <label htmlFor="description">Descripción:</label>
        <textarea id="description" cols="30" rows="5" placeholder="Escribe un comentario..."></textarea>
      </div>
      <button>Enviar</button>
    </form>
    </div>
  )
}

export default ContactPage;