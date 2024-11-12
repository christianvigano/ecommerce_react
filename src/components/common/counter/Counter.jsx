import { useState } from "react";
import Button from "@mui/material/Button"; // Importamos el botón de MUI
import AddIcon from "@mui/icons-material/Add";
import ButtonGroup from "@mui/material/ButtonGroup";
import RemoveIcon from "@mui/icons-material/Remove";
import { toast } from "sonner";


const Counter = ({ stock, agregarAlCarrito, cantidadProductoControlar }) => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    stock - cantidadProductoControlar > contador
      ? setContador(contador + 1)
      : toast.warning("Stock No Disponible", { duration: 1000 });
  };
  const restar = () => {
    contador > 1 && setContador(contador - 1);
  };

  
  return (
    <div>
      <ButtonGroup>
        <div className="btn-reduce">
          <Button aria-label="reduce" onClick={restar}>
            <RemoveIcon fontSize="small" />
          </Button>
        </div>
        <div>
          <h2
            style={{
              fontSize: "15px", // Cambia 'font' a 'fontSize' para ajustar el tamaño de la fuente
              marginLeft: "20px", // Ajusta el margen izquierdo
              marginRight: "20px",
              padding: "", // Ajusta el margen derecho
            }}
          >
            Cantidad = {contador}
          </h2>
        </div>
        <div>
          <Button aria-label="increase" onClick={sumar}>
            <AddIcon fontSize="small" />
          </Button>
        </div>
      </ButtonGroup>
     
      {/* Botón MUI centrado */}
      <Button
        variant="contained"
        color="primary"
        className="btn-mui"
        disabled={stock - cantidadProductoControlar < contador}
        onClick={() => {
          agregarAlCarrito(contador);
          toast.success("Producto Agregado Correctamente", { duration: 1000 });
        }}
      >
        Agregar al Carrito
      </Button>
    </div>
  );
};

export default Counter;
