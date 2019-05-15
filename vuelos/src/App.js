import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Navegador from "./components/Navegador";
import Vuelos from "./components/Vuelos";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import Asientos from "./components/Asientos";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <div>
            <Navegador/>
        </div>
        <div className="container">
            <Switch>
                <Route path={"/home"}
                       component={Home}
                />
                <Route path={"/vuelos"}
                       component={Vuelos}
                />
                <Route path={"/log-in"}
                       component={LogIn}/>
                <Route path={"/asientos"}
                       component={Asientos}/>
                <Route component={Home}
                />
            </Switch>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
