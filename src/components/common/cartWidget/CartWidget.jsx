import { FaShoppingCart } from "react-icons/fa";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <Link to="/cart">
      <Badge badgeContent={cart.length} color="secondary">
        <FaShoppingCart />
      </Badge>
    </Link>
  );
};

export default CartWidget;
