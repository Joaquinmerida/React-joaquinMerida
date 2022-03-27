import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { contexto } from "../context/CartContext";
// import { useContext } from "react";


const ItemCount = (props) => {

  const stock = 10;

  
  const [estado, setEstado] = useState(props.inicial);

  // const{carrito, total, borrarProducto } = useContext(contexto)


  const sumarItem = () => {
    if (estado < stock) {
      setEstado(estado + 1);
    }
  };

  const restarItem = () => {
    if (estado > 0) {
      setEstado(estado - 1);
    }
  };

  const agregarPedido = () => {
    props.onAdd(estado)
  };



return (
    <>
    <div className="counter">
        <div className="contador">
        <div className="contador__inside">
            <p>Elementos pedidos:</p>
            <button onClick={sumarItem}>+</button>
            <h2 id="counter__count">{estado}</h2>
            <button onClick={restarItem}>-</button>
        </div>
        <div className="contador__insideDos">
            <button onClick={agregarPedido}>Confirmar cantidad seleccionada</button>
            <Link to="/menu/cart">Finalizar compra</Link>
            </div>
        </div>
    </div>
    </>
  );
};

export default ItemCount;
