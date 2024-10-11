import "./navbar.css";
import CartWidget from "../../common/cartWidget/CartWidget";


export const Navbar = () => {
  return (
    <div className="container-navbar">
      <img
        className="imagen-logo"
        src="https://res.cloudinary.com/dw7wbrw6v/image/upload/v1728140299/free-photo-of-crecimiento-cactus-cultivado-plantas-en-maceta_jvkoh4.jpg"
        alt=""
      />

      
        <ul className="lista-categorias">
          <li>
            <a href=""> Todas </a>
          </li>
          <li>
            <a href=""> Verano </a>
          </li>
          <li>
            <a href=""> Invierno </a>
          </li>
        </ul>
      

      <CartWidget />
    </div>
  );
};
