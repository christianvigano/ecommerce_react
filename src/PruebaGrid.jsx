import { useState} from "react"
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";


const PruebaGrid = () => {

  const [valor, setPassword] = useState(false);
  
  const cambioValor = () => { 
    
    
    setPassword(!valor)
    
    

  }
  
  return (
    <Grid>
      <div>
       
        <TextField id="standard-basic" label="Standard" variant="standard" type={ valor ? "password" : "text" } />
        <Button onClick={cambioValor} variant="contained">
          contained
        </Button>
        ;
      </div>
    </Grid>
  );
  
 
}

export default PruebaGrid