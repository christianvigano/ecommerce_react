
import Counter from "../../common/counter/Counter";
import "./itemdetail.css"; //  importar el archivo de estilos


const ItemDetail = ({ items, agregarAlCarrito, cantidadProduct }) => {
  const { title, precio, stock, imageurl } = items;

  return (
    <div className="cards-wrapper">
      <div className="item-container">
        <img src={imageurl} alt={title} />
        <h2>{title}</h2>
        <h2 className="price">Precio: ${precio}</h2>
        <h2 className="stock">Stock: {stock} unidades</h2>
        
        <Counter
          stock={stock}
          agregarAlCarrito={agregarAlCarrito}
          cantidadProductoControlar={cantidadProduct}
        />
      </div>
    </div>
  );
};

export default ItemDetail;
