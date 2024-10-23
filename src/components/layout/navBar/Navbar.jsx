import "./navbar.css";
import CartWidget from "../../common/cartWidget/CartWidget";
import { Link} from "react-router-dom"



export const Navbar = () => {
  return (
    <div className="container-navbar">
      <Link to="/">
        <img
          className="imagen-logo"
          src="https://res.cloudinary.com/dw7wbrw6v/image/upload/v1728140299/free-photo-of-crecimiento-cactus-cultivado-plantas-en-maceta_jvkoh4.jpg"
          alt=""
        />
      </Link>

      <ul className="lista-categorias">
        <li>
          <Link to="/"> Todas </Link>
        </li>
        <li>
          <Link to="/categoria/Verano"> Verano </Link>
        </li>
        <li>
          <Link to="/categoria/Invierno"> Invierno </Link>
        </li>
        <li>
          <Link to="/categoria/Media Estacion"> Media Estacion </Link>
        </li>
      </ul>

      <CartWidget />
    </div>
  );
};
