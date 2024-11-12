import "./navbar.css";
import CartWidget from "../../common/cartWidget/CartWidget";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
//https://res.cloudinary.com/dw7wbrw6v/image/upload/v1728140299/free-photo-of-crecimiento-cactus-cultivado-plantas-en-maceta_jvkoh4.jpg


export const Navbar = () => {
  return (
    <div className="container-navbar">
      <Link to="/">
        <img
          className="imagen-logo"
          src="https://res.cloudinary.com/dw7wbrw6v/image/upload/v1730502153/Verde_Vida_transparent_fixed_gat1zl.png"
        />
      </Link>

      <div className="lista-categorias">
        <Button component={Link} to="/" className="nav-button">
          Todas
        </Button>
        <Button component={Link} to="/categoria/Verano" className="nav-button">
          Verano
        </Button>
        <Button
          component={Link}
          to="/categoria/Invierno"
          className="nav-button"
        >
          Invierno
        </Button>
        <Button
          component={Link}
          to="/categoria/Media Estacion"
          className="nav-button"
        >
          Media Estación
        </Button>
      </div>

      <CartWidget />
    </div>
  );
};
