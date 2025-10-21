const Contacto = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Gracias, en breve nos contactaremos con usted");
  };

  return (
    <div>
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Tu nombre" required />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;
