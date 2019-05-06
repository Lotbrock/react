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
                      <Input type={"text"} id={"Origen"} placeholder={"Origen"} className={"col-md-7"}/>
                  </div>
                  <div className={"col"}>
                      <Input type={"text"} id={"Destino"} placeholder={"Destino"} className={"col-md-7"}/>
                  </div>
                      <Calendario id={"ida"}/>
                      <Calendario id={"vuelta"}/>
                  </div>
              </Form>
      </div>
    </div>
  );
}

export default App;
