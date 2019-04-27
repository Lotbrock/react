import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation';
import FormTasks from './components/FormTasks';
import { todos } from './todos'
import Example from "./components/Example";

class App extends Component {
    constructor(){
        super();
        this.state = {
            todos
        };
        this.agregarTarea = this.agregarTarea.bind(this);
    }

    agregarTarea(todo){
        this.setState({
            todos: [...this.state.todos, todo]
        })
    }

    removeTodo(indx){
        this.setState({
            todos: this.state.todos.filter((e,i) =>{
                return i !== indx
            })

        })
    }

  render() {
        const todos = this.state.todos.map((todo, i) =>
      {
          return(
              <div className="col-md-4" key={i}>
                  <div className="card mt-4">
                      <div className="card-header">
                          <h3>{todo.titulo}</h3>
                          <span className="badge badge-pill badge-danger ml-2">
                              {todo.prioridad}
                          </span>
                      </div>
                      <div className="card-body">
                          <p>{todo.descripcion}</p>
                          <p><mark>{todo.responsable}</mark></p>
                      </div>
                      <div className="card-footer">
                          <button
                          className="btn btn-danger"
                          onClick={this.removeTodo.bind(this, i)}
                          >
                              Eliminar
                          </button>
                      </div>
                  </div>
              </div>
          )
      });
          return (
              <div className="App">

                      <Example/>
                          <div className="container">
                              <div className="col-md-3">
                                  <img src={logo} className="App-logo" alt="logo"/>
                                  <FormTasks onAddTodo={this.agregarTarea}/>
                              </div>
                              <fieldset><legend><h2>Tareas</h2></legend></fieldset>
                              <div className=" col-md-9">
                                  <div className="row">
                                      { todos}
                                  </div>
                              </div>
                          </div>


                  {/*<Navigation titulo="Pagina de Tareas"/>*/}
              </div>
          );
      }

}

export default App;
