
const Card = ({ planta, precio, stock, imagen }) => {
  //recibo por props la desestructuracion del map y la cargo para mostrar

  return (
    <div
      style={{
        border: "6px solid black",
        width: "300px",
        minHeight: "200px",
      }}
    >
      <img src={imagen} alt="" />
      <h2>Planta:{planta}</h2>
      <h2>Precio:{precio}</h2>
      <h2>Stock:{stock}</h2>
    </div>
  );}

export default Card;