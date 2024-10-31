
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import "./cartcontainer.css"
import Button from "@mui/material/Button"; // Importamos el botón de MUI

const CartContainer = () => {

  const { resetCarrito, cart, removeCartId } = useContext(CartContext);

  return (
    <div>
      <div className="cards-wrapper">
        {cart.map((products) => {
          return (
            <div key={products.id} className="cart-container">
              <img src={products.imageurl} alt={products.planta} />
              <h2>{products.planta}</h2>
              <h2 className="price">Precio: ${products.precio}</h2>
              <h2 className="cantidad">Cantidad: {products.quantity}</h2>
              {/* Botón MUI centrado */}
              <Button
                variant="contained"
                color="primary"
                className="btn-mui-vaciar"
                onClick={() =>  removeCartId(products.id)}              >
                Eliminar Item
              </Button>
            </div>
          );
        })}
        ;
      </div>
      {/* Botón MUI centrado */}
      <Button
        variant="contained"
        color="primary"
        className="btn-mui-vaciar"
        onClick={resetCarrito}
      >
        Vaciar Carrito
      </Button>
      {/*  <button onClick={resetCarrito}>Vaciar Carrito</button>*/}
    </div>
  );

}

export default CartContainer