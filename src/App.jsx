import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/layout/footer/Footer";
import { Navbar } from "./components/layout/navBar/Navbar";
//import Grid from "@mui/material/Grid2";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import CartContainer from "./components/pages/cart/CartContainer";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";


function App() {
  
  //const mediaqueries = { xs: 12, sm: 6, md: 4, lg: 3 };

  return (
    //siempre es esta estructura. Dentro de route va siempre
    //las rutas que luego parametrizamos en los componentes con la etiqueta Link
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/*//path raiz, solo puede haber uno solo.*/}
        <Route path="/" element={<ItemListContainer />} />
        {/*//path que usa el mismo componente que el raiz pero filtradn  categorias del array de proeductos.*/}
        <Route path="/categoria/:name" element={<ItemListContainer />} />

        {/*//path del detalle de la cart*/}
        <Route path="/cart" element={<CartContainer />} />
        
        {/*//path dinamico de la cart*/}
        <Route path="/itemdetail/:id" element={<ItemDetailContainer />} />

        {/*//path para cualquier ruteo que no encuentre*/}
        <Route path="*" element={<h2>404 No se encontro la pagina</h2>} />

       
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
