function TarjetaBienvenida({ titulo, descripcion }) {
  const esTituloPrincipal = titulo === 'Bienvenido a Tech Store';

  return (
    <div>
      <h1 style={{ fontSize: esTituloPrincipal ? '2rem' : '1.3rem' }}>{titulo}</h1>
      <p>{descripcion}</p>
      <button>Ver catálogo</button>
    </div>
  );
}

export default TarjetaBienvenida;
