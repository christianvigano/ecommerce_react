import { FaShoppingCart } from "react-icons/fa";
import { Badge } from "@mui/material";
import { Link} from "react-router-dom"

const CartWidget = () => {
 

  return (
    <Link to="/cart">
      <Badge badgeContent={3} color="secondary">
        <FaShoppingCart />
      
      </Badge>
    </Link>
  );
};

export default CartWidget;
