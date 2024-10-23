import "../itemListContainer/itemlistcontainer.css";
import { products } from "../../../products";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams} from "react-router-dom"


 //aca declaro la promesa que va a devolver el array de la lectura de los productos o alguna api
    let misProductos = new Promise((res, rej) => {
      //esta funcion provoca que para devolver la promesa espera 2500 milisegundo,
      //esto es simular un retraso de traerr info de una api

      setTimeout(() => {
        if (products.length == 0) rej("Productos vacios");
        else res(products);
      },2500);
    });



const ItemListContainer = () => {

  //declaro el router para ruteo de opciones recibiendo parametros.
  const { name } = useParams();
  
  //declaro el estado para que renderice cuando deseamos.
  const [myProducts, setMisProductos] = useState([]);


  //declaro el estado para definir cuando se ejecuta.
  //Recordadr que sin info en corcheres solo se ejecuta cuando carga solamente el compoenente, ahora esta escuchando la
  //dependencia name, que viene del componente app para rutear
  useEffect(() => {
    
   
//aca recoro el array de productos filtrando por nombre de categoria
const filtradoCategoria = products.filter((nombre) => nombre.category === name);


    misProductos
      .then((res) => {
        //aca si la variable name viene con algo, ejecuta el filstrado sino deveuelve todo el array de productos
        setMisProductos(name ? filtradoCategoria:  res);
      })
      .catch((rej) => {
        console.log(rej);
      });
  }, [name]);



  return (
    <div className="il-container">
      {/*aca llamo al compoenente items list para agrupar y solo paso la variable del usestate y la recibe como propos */}
      <ItemList myProducts={myProducts} />
    </div>
  );
};

export default ItemListContainer;
