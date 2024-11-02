import Card from "../../common/card/Card";

const ItemList = ({ myProducts }) => {

    //recibo por props el usestate con la ionformacion de todos los productos. 
    //con el map recorro por el key y dessestructuro y paso a la card como props

  return myProducts.map(({ id, imageurl, title, precio, stock }) => (

      
      <Card
        key={id}
        imagen={imageurl}
        planta={title}
        precio={precio}
        stock={stock}
        id={id}
      />
   
  ));
};

export default ItemList;
