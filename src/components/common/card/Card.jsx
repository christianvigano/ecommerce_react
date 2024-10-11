import "./card.css"; // Asegúrate de importar el archivo de estilos
import Button from "@mui/material/Button"; // Importamos el botón de MUI

const Card = ({ planta, precio, stock, imagen }) => {
  return (
    <div className="card-container">
      <img src={imagen} alt={planta} />
      <h2>{planta}</h2>
      <h2 className="price">Precio: ${precio}</h2>
      <h2 className="stock">Stock: {stock} unidades</h2>

      {/* Botón MUI centrado */}
      <Button variant="contained" color="primary" className="btn-mui">
        Comprar
      </Button>
    </div>
  );
};

export default Card;
