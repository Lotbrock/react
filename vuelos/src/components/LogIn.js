import React, { Component } from 'react';
import { Button, FormGroup, Form } from "reactstrap";
import { Link } from 'react-router-dom'
import Input from "reactstrap/es/Input";
import Label from "reactstrap/es/Label";

class LogIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
    };

    render() {
        return (
            <div className="container">
                <div className={"login-form"}>
                    <h3 className={"card-title"}> Log-In</h3>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="email" bsSize="large">
                        <Label>Usuario o Número de socio</Label>
                        <Input
                            autoFocus
                            type="email"
                            onChange={this.handleChange}
                            placeholder={"Ya sabes que colocar aca"}
                            required
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <Label>Password</Label>
                        <Input
                            onChange={this.handleChange}
                            type="password"
                            placeholder={"No se lo digas a nadie"}
                        />
                    </FormGroup>
                    <Link to={"/vuelos"}>
                    <Button
                        block
                        bsSize="large"
                        type="submit"
                        className={"bg-colorsitos btn login-btn btn-block"}
                    >
                        Login
                    </Button>
                    </Link>
                </Form>
                </div>
            </div>
        );
    }
}
export default LogIn;