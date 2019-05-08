import React from 'react';
import logo from './logo.svg';
import Calendario from './components/Calendario'
import { UncontrolledCollapse, Form, Input, Button } from 'reactstrap'
import './App.css';
import Navegador from "./components/Navegador";
function App() {
    var ida="";
  return (
    <div className="App">
        <div>
            <Navegador/>
        </div>
        <div className="container">
          <h1 className={"text-white"}>Vuelos a todos los destino</h1>
              <Form>
                  <div className={"row"}>
                  <div className={"col"}>
                      <span className={"text-white"}> Ciudad Origen</span><br/>
                      <Input type={"text"} id={"Origen"} placeholder={"Origen"}/>
                  </div>
                  <div className={"col"}>
                      <span className={"text-white col-md-12"}> Ciudad Destino</span><br/>
                      <Input type={"text"} id={"Destino"} placeholder={"Destino"} />
                  </div>
                      <Calendario id={"Ida"}/>
                      <Calendario id={"Vuelta"}/>
                      <div className={"col"}>
                          <span className={"text-white"}> Pasajeros</span><br/>
                          <Input type={"number"} placeholder={"pasajeros"} />
                      </div>
                  </div>
                  <div className={"center"}>
                      <Button id={"boton"}>Buscar</Button>
                  </div>
              </Form>
      </div>
    </div>
  );
}

export default App;
