import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Navegador from "./components/Navegador";
import Vuelos from "./components/Vuelos";
import Home from "./components/Home";
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
                <Route component={Home}
                />
            </Switch>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
