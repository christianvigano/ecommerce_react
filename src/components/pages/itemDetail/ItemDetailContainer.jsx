import { useState,useEffect, useContext } from "react"
import ItemDetail from "./ItemDetail"
import {useParams } from "react-router-dom"
import { CartContext } from "../../../context/CartContext"
import { db } from "../../../../firebaseConfig"
import { collection, getDoc, doc } from "firebase/firestore";


const ItemDetailContainer = () => {
  
  const { id } = useParams();

  const [itemsDetail, setItemDetails] = useState({});
  
  const { addToCart, cantidadesTotalesCarrito } = useContext(CartContext);

  let cantidadProducto = cantidadesTotalesCarrito(id);


  const agregarAlCarrito = (cantidad) => {
    
    let objeto = { ...itemsDetail, quantity: cantidad };
    addToCart(objeto);
    
   
  };

    useEffect(() => {
      //cuando uso funcion con llaver si o si tengo que poner el returno
        //let productsSelect = products.find((productos) => { return productos.id == id });
        //sino va sin llavers, explicito

      //let productsSelect = products.find(productos => productos.id == id);

      //aca referencio la coleccion de productos
      const colec = collection(db, "products")
      //referencio el registor de la coleccion pasando la coleccion y porquelo quiero filtrar.
      const docs = doc(colec, id)

      //obtengo el registro y armos un objeto nuevo con lo que hay en la data y el id
      getDoc(docs).then((res) => {
       
        setItemDetails({ ...res.data(), id: res.id });

      })


      



    }, [id]);
   


    return (
      <ItemDetail
        items={itemsDetail}
        agregarAlCarrito={agregarAlCarrito}
        cantidadProduct={cantidadProducto}
      />
    );
}

export default ItemDetailContainer



