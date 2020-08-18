import React, {Fragment, useState, useEffect} from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Clima from './componentes/Clima';


function App() {

  // states
  const [busqueda, guardarBusqueda]=useState({
    ciudad:'',
    pais:''
  });
  const [consultar, guardarConsultar] = useState(false);
  const [resultado, guardarResultado]=useState({});
  
  
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
      };
     
    }; 
    consultarAPI();
  },[consultar]);

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
            <div className="col m6 s12"><Clima resultado = {resultado}/></div>
          </div>
        </div>
      </div> 
    </Fragment>
  );
}

export default App;
