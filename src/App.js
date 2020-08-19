import React, {Fragment, useState, useEffect} from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Clima from './componentes/Clima';
import Error from './componentes/Error';


function App() {

  // states
  const [busqueda, guardarBusqueda]=useState({
    ciudad:'',
    pais:''
  });
  const [consultar, guardarConsultar] = useState(false);
  const [resultado, guardarResultado]=useState({});
  const [error, guardarError] = useState(false);
  
  
  const {ciudad, pais} = busqueda;
  
  useEffect(()=>{
    const consultarAPI =  async()=>{
      if(consultar){
        const appIdd='b28661d9cb88324ed69b1c4fdfa43061';
        const url = ` http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appIdd}`

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        guardarResultado(resultado);
        guardarConsultar(false);

        //Detecta si hubo resultados erróneos
        
        if(resultado.cod==="404"){
          guardarError(true);
        }else{
          guardarError(false);
        };

      };
     
    }; 
    consultarAPI();
  },[consultar]);

  let componente;
  if(error){
    componente = <Error mensaje ="No hay resultados" />
  }else{
    componente = <Clima resultado ={resultado} />
  };


  return (
    <Fragment>
      <Header
        titulo="Clima React App"
      /> 
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12"><Formulario
                    busqueda ={busqueda}
                    guardarBusqueda={guardarBusqueda}
                    guardarConsultar={guardarConsultar}
            />
            
            </div>
            <div className="col m6 s12">{componente}</div>
          </div>
        </div>
      </div> 
    </Fragment>
  );
}

export default App;
