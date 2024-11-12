import { FaShoppingCart } from "react-icons/fa";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { cart, cantidadTotalUnidades } = useContext(CartContext);


  const cantidadTotal = cantidadTotalUnidades();
  return (
    <Link to="/cart">
      <Badge
        badgeContent={cart.length === 0 ? "0" : cantidadTotal}
        color="primary"
      >
        <FaShoppingCart color="green" />
      </Badge>
    </Link>
  );
};

export default CartWidget;
