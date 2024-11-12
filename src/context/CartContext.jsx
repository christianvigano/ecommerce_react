//crear un contecto
import {createContext, useState} from "react"

export const CartContext = createContext();



//disponibilizar el compornente.
export const CartContextprovider = ({ children }) => {
  const  [cart, setCart]  = useState([]);

    console.log(cart);
    //aca va toda la logica de cargar al carttiyo, borrar, sumar, etc.
    
  const addToCart = (product) => {

  const existe = cart.some((item) => item.id === product.id);

    if (existe) {
      
      //el map devuelve un array nuevo con la misma longitud que el que vamos a recorrer.
      let nuevoArray = cart.map((elemento) => {
        
        if (elemento.id === product.id) {
          
          //cuando encuentra yo tengo que agrgar al array el nuevo objeto. entonces hago spred y modifico cantidad.
          //espazo el objeto, accedo a la propieda quantity y le sumo lo que viene a lo que exista cuando el id coincida con el 
          //existente en el carrito.
          return {...elemento, quantity: elemento.quantity + product.quantity}

        }

        return elemento;
      })
      
      setCart(nuevoArray)
    }else{
      setCart([...cart, product]); 
   }
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
  

  const cantidadesTotalesCarrito = (id) => {
    
   const cantidad = cart.find((elemento)=>elemento.id === id)
   
   
  
    return cantidad ? cantidad.quantity : 0
  



  }


  const totalCompra = () => {
    

    let totalCompra = cart.reduce((acumulador, elemento) =>
       acumulador + (elemento.precio * elemento.quantity),0);

     return totalCompra ? totalCompra : 0;
  }


  const cantidadTotalUnidades = () => {

    //el reduce lleva a un array a su minima expresion.
    //tiene 2 parametros el que acumula y el elemento a recorrer
const totalCantidad = cart.reduce(
  (acumulador, elemento) => acumulador + elemento.quantity,
  0
);

return totalCantidad ? totalCantidad : 0;


  }




    let data = {
      cart,
      addToCart,
      removeCartId,
      resetCarrito,
      cantidadesTotalesCarrito,
      totalCompra,
      cantidadTotalUnidades,
    };
    
  return (
    <CartContext.Provider value={ data }>{children}</CartContext.Provider>
  );
}


