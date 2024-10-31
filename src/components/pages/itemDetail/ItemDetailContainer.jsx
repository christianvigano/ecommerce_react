import { useState,useEffect, useContext } from "react"
import ItemDetail from "./ItemDetail"
import { products } from '../../../products'
import {useParams } from "react-router-dom"
import { CartContext } from "../../../context/CartContext"


const ItemDetailContainer = () => {
  
  const { id } = useParams();

  const [itemsDetail, setItemDetails] = useState({});
  const { addToCart } = useContext(CartContext);

  /*const x = useContext(CartContext);

  console.log(x)*/

  const agregarAlCarrito = (cantidad) => {
    
    let objeto = { ...itemsDetail, quantity: cantidad };
    addToCart(objeto);
    
   
  };

    useEffect(() => {
      //cuando uso funcion con llaver si o si tengo que poner el returno
        //let productsSelect = products.find((productos) => { return productos.id == id });
        //sino va sin llavers, explicito

      let productsSelect = products.find(productos => productos.id == id);

      setItemDetails(productsSelect);



    }, [id]);
   


    return (
      <ItemDetail items={itemsDetail} agregarAlCarrito={agregarAlCarrito} />
    );
}

export default ItemDetailContainer



