import {useState} from "react"

const Checkout = () => {

  const [info,setInfo] = useState({name:"",email:""})

  const enviarFormulario = (evento) => { 

    evento.preventDefault();
    console.log(info);


  

  }

  const capturarInfo = (evento) => {
//desructuro la propiesda del evento.
    const { name, value } = evento.target;
  
    //spread para traer el objeto del estado y reemplazar variables.
    //los 3 puntos iniciales significan, esparcime el objeto del use state y remmplazalo
    // 
    setInfo({...info,[name]:value  });

  }

  return (
    <div>

      
      <form onSubmit={enviarFormulario}>
        <input
          type="text"
          placeholder="Ingrese Nombre"
          name="name"
          onChange={capturarInfo}
        />

        <input
          type="email"
          placeholder="Ingrese Email"
          name="email"
          onChange={capturarInfo}
        />
        <button onClick={enviarFormulario}>Comprar</button>
      </form>
    </div>
  );
}

export default Checkout;