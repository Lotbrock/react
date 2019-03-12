import React, { Component } from 'react';

class FormTasks extends Component{
    constructor(){
        super();
        this.state ={
            titulo: '',
            responsable: '',
            descripcion: '',
            prioridad: 'low'
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleInput(e){
        const{ value, name} = e.target;
        this.setState({
        [name]: value
        });
    }


    handleSubmit(e){
        e.preventDefault();
        this.props.onAddTodo(this.state);
    }

    render() {
        return (
            <div className="card">
                <form onSubmit={this.handleSubmit} className="card-body">
                <div className="form-group">
                    <input
                        type="text"
                        name="titulo"
                        onChange={this.handleInput}
                        className="form-control"
                        placeholder="Titulo"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="responsable"
                        onChange={this.handleInput}
                        className="form-control"
                        placeholder="Responsable"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="descripcion"
                        onChange={this.handleInput}
                        className="form-control"
                        placeholder="Descripcion"
                    />
                </div>
                <div className="form-group">
                    <select
                        name="prioridad"
                        className="form-control"
                        onChange={this.handleInput}
                    >
                        <option value="low">low</option>
                        <option value="medium">medium</option>
                        <option value="high">high</option>
                    </select>
                </div>
                    <button type="submit" className="btn btn-primary">
                       Enviar
                    </button>
                </form>
            </div>
        );
    }


}
export default FormTasks;