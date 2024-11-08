import { useContext, useState } from "react";
import { db } from "../../../../firebaseConfig";
import { CartContext } from "../../../context/CartContext";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import {
  TextField,
  Button,
  Box,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import "./checkout.css";
import { Link } from "react-router-dom";

const Checkout = () => {
  //usecontext para tomar el carrito y el total de compra
  const { cart, totalCompra, resetCarrito } = useContext(CartContext);
  
  //estado informacion para capturar en el formulario
  const [info, setInfo] = useState({ name: "", lastname: "", email: "" });

  //estado de la orden para armar el envio del pedido a firebase
  const [orderId, setOrderId] = useState(null);
  
  //estado del loading
  const [loading, setLoading] = useState(false);
  
  //estado del dialog que devuelve el id.
  const [openDialog, setOpenDialog] = useState(false); // Controla el diálogo de confirmación

  const enviarFormulario = async (evento) => {
    evento.preventDefault();
    setLoading(true);

    //funcion que se ejecuta 1 vez al enviar el formulario para tener el total del carrito.
    const total = totalCompra();
    
    //objeto orden para setear el estado.
    const orders = {
      buyer: info,
      items: cart,
      total,
    };

    try {
      //referencio la coleccion de order
      const refColection = collection(db, "order");

      //agrego un registro de compra con un await para esperar la respuesta.
      const res = await addDoc(refColection, orders);
      //seteo ele stado order para mostrar el resultado.
      setOrderId(res.id);

      // Abre el diálogo de confirmación
      setOpenDialog(true);

      //referencio la coleccion de productos para actualizar el stock
      const refColectionActualiza = collection(db, "products");

      //crear todas las promese de items que estan en el docs y las ejecuta en paralelo 
      //y espera que termine todas para continuar con el sioguiente loque
      await Promise.all(
        orders.items.map((item) => {
          const docs = doc(refColectionActualiza, item.id);
          return updateDoc(docs, { stock: item.stock - item.quantity });
        })
      );
    } catch (error) {
      console.error("Error al procesar la compra:", error);
    } finally {
      setTimeout(2500);
      setLoading(false);
      resetCarrito();
    }
  };

  const capturarInfo = (evento) => {
    const { name, value } = evento.target;
    setInfo({ ...info, [name]: value });
  };

  const handleCloseDialog = () => {
    setOpenDialog(false); // Cierra el diálogo cuando se hace clic en "Aceptar"
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={enviarFormulario}
        className="form-container"
      >
        {loading ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="30vh"
            width="30%"
          >
            <CircularProgress />
          </Box>
        ) : (
          <>
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
                disabled={loading}
              >
                Comprar
              </Button>
            </div>
          </>
        )}
      </Box>

      {/* Diálogo de confirmación */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>¡Gracias por su compra!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Su orden ha sido registrada con éxito. El ID de su compra es:{" "}
            <strong>{orderId}</strong>.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to="/">
            <Button onClick={handleCloseDialog} color="primary" autoFocus>
              Aceptar
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Checkout;
