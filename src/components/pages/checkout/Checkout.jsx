import { useContext, useState } from "react"
import { db } from "../../../../firebaseConfig"
import { CartContext } from "../../../context/CartContext"
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { TextField, Button, Box } from "@mui/material";
import "./checkout.css";


const Checkout = () => {

  const { cart, totalCompra } = useContext(CartContext);

  const [info,setInfo] = useState({name:"",lastname:"",email:""})

  const [orderId, setOrdeId] = useState(null);
  
  
  const enviarFormulario = (evento) => { 

    evento.preventDefault();
    console.log(info);

    const total = totalCompra();

  const orders = {

      buyer: info,
      items: cart,
      total
  }

    let refColection = collection(db, "order");
    addDoc(refColection, orders).then((res) => setOrdeId(res.id));


let refColectionActualiza = collection(db, "products");
   
    
    
    orders.items.forEach((item) => {
      
      let docs = doc(refColectionActualiza, item.id);
      
    updateDoc(docs,{stock: item.stock-item.quantity});

    })
  }

  const capturarInfo = (evento) => {
//desructuro la propiesda del evento.
    const { name, value } = evento.target;
  
    //spread para traer el objeto del estado y reemplazar variables.
    //los 3 puntos iniciales significan, esparcime el objeto del use state y remmplazalo
    // 
    setInfo({...info,[name]:value  });

  }

  if (orderId) {
    

 
    return <h2>Gracias por su compra: {orderId}</h2>
  }

 return (
   <Box component="form" onSubmit={enviarFormulario} className="form-container">
     <div className="items-carga">
       <TextField
         fullWidth
         label="Nombre"
         name="name"
         variant="outlined"
         onChange={capturarInfo}
         required
         className="form-item"
       />
     </div>

     <div className="items-carga">
       <TextField
         fullWidth
         label="Apellido"
         name="lastname"
         variant="outlined"
         onChange={capturarInfo}
         required
         className="form-item"
       />
     </div>

     <div className="items-carga">
       <TextField
         fullWidth
         label="Email"
         type="email"
         name="email"
         variant="outlined"
         onChange={capturarInfo}
         required
         className="form-item"
       />
     </div>

     <div className="boton">
   
       <Button
         className="form-button"
         variant="contained"
         color="primary"
         type="submit"
       >
         Comprar
       </Button>
     </div>
   </Box>
 );
}

export default Checkout;