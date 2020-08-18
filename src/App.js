import React, {Fragment, useState, useEffect} from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';


function App() {

  // state del formulario
  const [busqueda, guardarBusqueda]=useState({
    ciudad:'',
    pais:''
  });

  const {ciudad, pais} = busqueda;

  const [consultar, guardarConsultar] = useState(false);

  useEffect(()=>{
    const consultarAPI =  async()=>{
      if(consultar){
        const appIdd='b28661d9cb88324ed69b1c4fdfa43061';
        const url = ` http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appIdd}`

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        console.log(resultado);
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
            <div className="col m6 s12">DOS</div>
          </div>
        </div>
      </div> 
    </Fragment>
  );
}

export default App;
