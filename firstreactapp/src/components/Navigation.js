import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Example from "./Example";

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: false
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    render() {
        return(
            <nav className="navbar navbar-dark bg-dark">
                <Example/>
                <NavbarBrand href="/" className="mr-0">{this.props.titulo}</NavbarBrand>


            </nav>
        )
    }
}

export default Navigation;