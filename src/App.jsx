import Footer from "./components/layout/footer/Footer";
import { Navbar } from "./components/layout/navBar/Navbar";
import Grid from "@mui/material/Grid2";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  const mediaqueries = { xs: 12, sm: 6, md: 4, lg: 3 };

  return (
    <Grid size={mediaqueries}>
      <div>
        <Navbar />
        <ItemListContainer />
        <Footer />
        {/*saludo = "Props Enviada desde el APP.jsx"*/}
        {/*<PruebaGrid />*/}
      </div>
    </Grid>
  );
}

export default App;
