import "../itemListContainer/itemlistcontainer.css";
import { products } from "../../../products";
import { useEffect, useState } from "react";
import ItemList from "../../common/itemList/Itemlist";

//aca declaro la promesa que va a devolver el array de la lectura de los productos o alguna api
let misProductos = new Promise((res, rej) => {
  //esta funcion provoca que para devolver la promesa espera 2500 milisegundo,
  //esto es simular un retraso de traerr info de una api
  setTimeout(() => {
    if (products.length == 0) rej("Productos vacios");
    else res(products);
  }, 2500);
});

const ItemListContainer = () => {
  //declaro el estado para que renderice cuando deseamos.
  const [myProducts, setMisProductos] = useState([]);

  //declaro el estado para definir cuando se ejecuta.
  //Recordadr que asi solo se ejecuta cuando carga solamente el compoenente
  useEffect(() => {
    misProductos
      .then((res) => {
        setMisProductos(res);
      })
      .catch((rej) => {
        console.log(rej);
      });
  }, []);

  // console.log(myProducts);

  return (
    <div className="il-container">
      {/*aca llamo al compoenente items list para agrupar y solo paso la variable del usestate y la recibe como propos */}
      <ItemList myProducts={myProducts} />
    </div>
  );
};

export default ItemListContainer;
