import { FaShoppingCart } from "react-icons/fa";
import { Badge } from "@mui/material";

const CartWidget = () => {
 

  return (
    <div>
      <Badge badgeContent={3} color="secondary" >
        <FaShoppingCart      
        />
      </Badge>
    </div>
  );
};

export default CartWidget;
