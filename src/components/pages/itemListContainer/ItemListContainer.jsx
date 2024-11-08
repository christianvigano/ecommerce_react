import "../itemListContainer/itemlistcontainer.css";
//import { products } from "../../../products";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams} from "react-router-dom"
import { Skeleton } from "@mui/material";
import { db } from "../../../../firebaseConfig"
import { collection, getDocs,query,where} from "firebase/firestore";


const ItemListContainer = () => {

  //declaro el router para ruteo de opciones recibiendo parametros.
  const { name } = useParams();

 
  //declaro el estado para que renderice cuando deseamos.
  const [myProducts, setMisProductos] = useState([]);


  //declaro el estado para definir cuando se ejecuta.
  //Recordadr que sin info en corcheres solo se ejecuta cuando carga solamente el compoenente, ahora esta escuchando la
  //dependencia name, que viene del componente app para rutear
  useEffect(() => {
  
    //aca me conecto y obtengo todos los productos
    const productosColections = collection(db, "products");

  
     //aca deckario una variabe que carga todo los datos.
    let docsRef = productosColections;

    //este if es para saber si en el ruteo viene un name, si entra filtra por cartegoria.
    if (name) {

         docsRef = query(productosColections, where("category", "==", name));

    }

    
//paso la variable generada.
    getDocs(docsRef).then((res) => {
      let arrayBase = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });

      setMisProductos(arrayBase);

      console.log(arrayBase);
    });
    
  
  
  }, [name]);



if (myProducts.length === 0) {
  return (
    <div className="skeleton">
      <div>
        <>
          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="rectangular"
            width={310}
            height={220}
          />

          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="text"
            width={310}
            height={90}
          />
          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="text"
            width={310}
            height={90}
          />
          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="text"
            width={310}
            height={90}
          />
        </>
      </div>
      <div>
        <>
          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="rectangular"
            width={310}
            height={220}
          />

          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="text"
            width={310}
            height={90}
          />
          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="text"
            width={310}
            height={90}
          />
          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="text"
            width={310}
            height={90}
          />
        </>
      </div>
      <div>
        <>
          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="rectangular"
            width={310}
            height={220}
          />

          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="text"
            width={310}
            height={90}
          />
          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="text"
            width={310}
            height={90}
          />
          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="text"
            width={310}
            height={90}
          />
        </>
      </div>
      <div>
        <>
          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="rectangular"
            width={310}
            height={220}
          />

          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="text"
            width={310}
            height={90}
          />
          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="text"
            width={310}
            height={90}
          />
          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="text"
            width={310}
            height={90}
          />
        </>
      </div>
    </div>
  );
}

  

  return (
    <div className="il-container">
      {/*aca llamo al compoenente items list para agrupar y solo paso la variable del usestate y la recibe como propos */}
      <ItemList myProducts={myProducts} />
    </div>
  );
};

export default ItemListContainer;
