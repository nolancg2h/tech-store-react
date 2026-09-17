import Saludo from './Saludo';
import TarjetaBienvenida from './TarjetaBienvenida';
import Boton from './Boton';
import TarjetaProducto from './TarjetaProducto';
import EstadoProducto from './EstadoProducto';
import Contador from './Contador';
import BuscarProductos from './BuscarProductos';

const productos = [
  { id: 1, nombre: 'Laptop UTEC', precio: 3500, cantidad: 8 },
  { id: 2, nombre: 'Mouse inalámbrico', precio: 45, cantidad: 25 },
  { id: 3, nombre: 'Teclado mecánico', precio: 120, cantidad: 15 },
  { id: 4, nombre: 'Monitor 27"', precio: 650, cantidad: 10 },
  { id: 5, nombre: 'Audífonos Bluetooth', precio: 180, cantidad: 20 },
  { id: 6, nombre: 'Webcam HD', precio: 95, cantidad: 12 },
];

function App() {
  return (
    <div>
      <Saludo />
      <TarjetaBienvenida
        titulo="Bienvenido a Tech Store"
        descripcion="Explora nuestros productos y encuentra todo lo que necesitas."
      />
      <TarjetaBienvenida
        titulo="Novedades del mes"
        descripcion="Descubre ofertas exclusivas y productos destacados en un solo lugar."
      />

      <h1>Catálogo</h1>
      {productos.map((producto) => (
        <div key={producto.id}>
          <TarjetaProducto
            nombre={producto.nombre}
            precio={producto.precio}
            cantidad={producto.cantidad}
          />
          <EstadoProducto nombre={producto.nombre} stock={producto.cantidad} />
        </div>
      ))}

      <Boton texto="Comprar" />
      <Boton texto="Agregar al carrito" />
      <Boton texto="Ver más" />

      <Contador />
      <BuscarProductos />
    </div>
  );
}

export default App;