import React, { Component } from 'react';
import Calendar from 'react-calendar';
import {Input, UncontrolledCollapse} from "reactstrap";

class Calendario extends Component {
    state = {
        date: new Date(),
        isOpen: false
    };
    onChange= date =>{
        date>new Date()?
        this.setState({date})
            : alert("LA FECHA DEBE SER POSTERIOR AL DIA ACTUAL")
    };

    render() {
        return (

            <div className={"col"}>
                <Input type={"text"} placeholder={this.state.date} id={this.props.id} className={"col-md-7"}/>
                <UncontrolledCollapse toggler={this.props.id}>
                    <div>
                        <Calendar
                            onChange={this.onChange}
                            value={this.state.date}
                        />
                    </div>
                </UncontrolledCollapse>
            </div>

        );
    }
}
export default Calendario;