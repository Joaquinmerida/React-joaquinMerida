import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const ItemCount = (props) => {

  const navigate = useNavigate()

  const stock = 10;

  const [estado, setEstado] = useState(props.inicial);


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
    props.onAdd(estado);
    toast.success('Item agregado al carrito',{
    position: "bottom-right",
    autoClose: 1500,
    progress:false});
  };



  return (
    <div className="counter">
      <div className="counter__inside">
        <p>Elementos pedidos:</p>
        <button onClick={sumarItem}>+</button>
        <h2 id="counter__count">{estado}</h2>
        <button onClick={restarItem}> - </button>
      </div>
      <div className="counter__insideDos">
        <button onClick={agregarPedido}>Confirmar cantidad seleccionada</button>
        <button onClick={() => navigate("/")}>Seguir comprando</button>
        <button onClick={() => navigate("/menu/cart")}>Terminar compra</button>
      </div>
    </div>
  );
};

export default ItemCount;
