//crear un contecto
import {createContext, useState} from "react"

export const CartContext = createContext();



//disponibilizar el compornente.
export const CartContextprovider = ({ children }) => {
  const  [cart, setCart]  = useState([]);

    console.log(cart);
    //aca va toda la logica de cargar al carttiyo, borrar, sumar, etc.
    
  const addToCart = (product) => {
    
      setCart([...cart, product]);
   
  };
   
    const removeCartId = (id) => {
    
        // aca creamos un array nuevo con todos los elementos del array menos el id que llega.
        // es decir que el arrayFiltrado contiene todos menos el que quiero eliminar
      //el filter devuelve siempre un array por lo que eso se lo paso al estado para ser renderizado.  
      let arrayFiltrado = cart.filter((elemento) => elemento.id !== id);
      setCart(arrayFiltrado);
    };
    
    const resetCarrito = () => {
        
      setCart([]); 
    }

    let data = { cart, addToCart, removeCartId, resetCarrito };
    
  return (
    <CartContext.Provider value={ data }>{children}</CartContext.Provider>
  );
}


