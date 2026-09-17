import DetalleProducto from './DetalleProducto';

function TarjetaProducto({ nombre, precio, cantidad }) {
  return (
    <div>
      <h2>{nombre}</h2>
      <p>Precio: ${precio}</p>
      {precio > 1000 && <p>Producto premium</p>}
      <p>Cantidad: {cantidad}</p>
      <DetalleProducto descripcion={`Este producto ${nombre} está disponible por $${precio} y cuenta con ${cantidad} unidades en stock.`} />
      <button>Ver producto</button>
    </div>
  );
}

export default TarjetaProducto;