import { useState } from "react";
import Button from "@mui/material/Button"; // Importamos el botón de MUI

const Counter = ({ stock, agregarAlCarrito }) => {
  const [contador, setContador] = useState(0);

  const sumar = () => {
    stock > contador ? setContador(contador + 1) : alert("Superaro el stock");
  };
  const restar = () => {
 
     setContador(contador - 1);
    
  };

  return (
    <div
      style={{
        margin: "50px",
      }}
    >
      <button onClick={sumar}>sumar</button>
      <h2>Contador = {contador}</h2>
      <button
        style={{
          margin: "10px",
        }}
        onClick={restar}
      >
        restar
      </button>

      {/* Botón MUI centrado */}
      <Button
        variant="contained"
        color="primary"
        className="btn-mui"
        onClick={() => {
          agregarAlCarrito(contador);
        }}
      >
        Agregar
      </Button>
    </div>
  );
};

export default Counter;
