import React, { Component } from 'react';
import DatePicker from 'react-date-picker';

class Calendario extends Component {
    state = {
        date: new Date(),
        isOpen: false
    };
    onChange= date =>{
        const id= this.props.id;
        this.setState(date);
        date>new Date()?
        window.sessionStorage.setItem(id ,date)
            : alert("LA FECHA DEBE SER POSTERIOR AL DIA ACTUAL")
    };

    render() {
        return (

            <div className={"col"}>
                <span className={"text-white col-md-12"}> {this.props.id}</span><br/>
                <DatePicker
                    id={this.props.id}
                    onChange={this.onChange}
                    value={this.state.date}
                />
            </div>

        );
    }
}
export default Calendario;