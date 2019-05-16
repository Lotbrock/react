import { stack as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'
import { NavbarBrand} from 'reactstrap'
import React from 'react'

class Navegador extends React.Component {

    render () {
        return (
            <Menu className="bm-menu">
                <NavbarBrand><img alt={"logo"} src={"https://medidasmaletas.com/wp-content/uploads/2017/03/latam-airlines-logo.jpg"} width={"250"} height={"120"}/> </NavbarBrand>
                <div className="bm-item-list ">
                    <div className="bm-item">
                        <Link className={"colorsitos"} to={"/home"}>Home</Link>
                    </div>
                </div>
                <div className="bm-item-list ">
                    <div className="bm-item">
                        <Link className={"colorsitos"} to={"/vuelos"}>Vuelos</Link>
                    </div>
                </div>
                <div className="bm-item-list ">
                    <div className="bm-item">
                        <Link className={"colorsitos"} to={"/log-in"}>Log In </Link>
                    </div>
                </div>
                <div className="bm-item-list ">
                    <div className="bm-item">
                        <Link className={"colorsitos"} to={"/asientos"}>Asientos </Link>
                    </div>
                </div>

            </Menu>
        );
    }
}
export default Navegador;