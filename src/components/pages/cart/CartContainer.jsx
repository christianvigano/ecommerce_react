
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import "./cartcontainer.css"
import Button from "@mui/material/Button"; // Importamos el botón de MUI
import { toast } from "sonner";
import { Link } from "react-router-dom";



const CartContainer = () => {

  const { resetCarrito, cart, removeCartId, totalCompra } =   useContext(CartContext);

//recibo en el useconectext la funcion y aca la ejecuto cada vez que renderizo el componente
  const totalCompraARealizar = totalCompra();


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
                onClick={() => {
                  removeCartId(products.id);
                  toast.success("Producto Eliminado Correctamente", {
                    duration: 1000,
                  });
                }}
              >
                Eliminar Item
              </Button>
            </div>
          );
        })}
        ;
      </div>

      {cart.length > 0 && (
        <h2 className="total">Total Compra: ${totalCompraARealizar}</h2>
      )}
      {/* Mostrar el botón solo si hay productos en el carrito */}
      {/* Tecnica de rendering dobrel ampersan, si el largo es mayor a cero entonces motra el boton. */}

      {cart.length > 0 && (
        <button onClick={resetCarrito} className="btn-mui-vaciar">
          Vaciar Carrito
        </button>
      )}

      {cart.length > 0 && (
        <Link to="/checkout">
          <button className="btn-mui-vaciar">Finalizar Compra</button>
        </Link>
      )}

      {cart.length === 0 && (
        <div>
          <h2 className="mensaje">El carrito se encuentra vacio</h2>

          <Link to="/">
            <button className="btn-mui-vaciar">Home</button>
          </Link>
        </div>
      )}
    </div>
  );

}

export default CartContainer