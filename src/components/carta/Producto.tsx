import React from "react";
import carta from "../../../public/carta.json";

const Producto = ({ prod, columns = 1 }) => {
    const productos = carta[prod] || [];

    let col1 = productos, col2 = [];
    if (columns === 2) {
        const mid = Math.ceil(productos.length / 2);
        col1 = productos.slice(0, mid);
        col2 = productos.slice(mid);
    }

    const renderProducto = (prod, index) => (
        <div key={index} className="producto-card">
            <div className="flex justify-between items-center">
                <span className="producto-nombre">{prod.nombre}</span>
                <span className="producto-precio">$ {prod.costo}</span>
            </div>
            <div className="producto-descripcion">{prod.descripcion}</div>
        </div>
    );

    if (columns === 2) {
        // Usar grid para alinear filas
        return (
            <div className="grid grid-cols-2 gap-4 py-5">
                {productos.map(renderProducto)}
            </div>
        );
    }

    return (
        <div className="py-5">
            {productos.map(renderProducto)}
        </div>
    );
}

export default Producto;