
import "./itemdetail.css"; //  importar el archivo de estilos
import Button from "@mui/material/Button"; // Importamos el botón de MUI

const ItemDetail = ({ items }) => {
  const { title, precio, stock, imageurl } = items;

  return (
    <div className="item-container">
      <img src={imageurl} alt={title} />
      <h2>{title}</h2>
      <h2 className="price">Precio: ${precio}</h2>
      <h2 className="stock">Stock: {stock} unidades</h2>

    
        {/* Botón MUI centrado */}
        <Button variant="contained" color="primary" className="btn-mui">
          Ver Detalle
        </Button>
   
      {/* Botón MUI centrado */}
      <Button variant="contained" color="primary" className="btn-mui">
        Comprar
      </Button>
    </div>
  );
};

export default ItemDetail;
