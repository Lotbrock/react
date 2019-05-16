import React, { Component } from 'react';
import DatePicker from 'react-date-picker';
import {Label} from "reactstrap";

class Calendario extends Component {
    state = {
        date: new Date(),
        isOpen: false
    };
    onChange= date =>{
        const id= this.props.id;
        this.setState({date});
        date>new Date()?
        window.sessionStorage.setItem(id ,date)
            : alert("LA FECHA DEBE SER POSTERIOR AL DIA ACTUAL")
    };
    render() {
        return (

            <div className={"col"}>
                <Label className={"text-vuelos"}>{this.props.id}</Label><br/>
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