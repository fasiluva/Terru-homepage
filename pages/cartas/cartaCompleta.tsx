import Producto from "../../src/components/carta/Producto"
import carta from "../../public/carta.json"

// Adaptar para recorrer el objeto de categorías
const categorias = Object.entries(carta).map(([nombre, productos]) => ({
  nombre,
  cantidad: Array.isArray(productos) ? productos.length : 0,
}));

const N = 10; // Número máximo de elementos antes de dividir en 2 columnas

const CartaConstruct = () => {
  return (
    <div
  className="min-h-screen flex justify-center items-start"
  style={{
    backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='44' height='12' viewBox='0 0 44 12'><path d='M20 12v-2L0 0v10l4 2h16zm18 0l4-2V0L22 10v2h16zM20 0v8L4 0h16zm18 0L22 8V0h16z' fill='%236b705c' fill-opacity='0.42' fill-rule='evenodd'/></svg>")`,
    backgroundRepeat: "repeat",
    backgroundSize: "66px 18px",
    backgroundColor: "#a5a58d",
  }}
>

      <div className="bg-white bg-opacity-90 rounded-xl shadow-xl mt-12 w-11/12 max-w-6xl min-h-[80vh] p-6">
        {categorias.map((cat, idx) => (
          <div key={cat.nombre} className="bg-gray-100 p-4 rounded mb-6 font-carta">
            <Producto prod={cat.nombre} columns={cat.cantidad > N ? 2 : 1} />
          </div>
        ))}
      </div>
    </div>
  );
}


export default CartaConstruct
