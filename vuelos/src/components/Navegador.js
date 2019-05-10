import { stack as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'
import React from 'react'

class Navegador extends React.Component {

    render () {
        return (
            <Menu className="bm-menu">
                <div className="bm-item-list">
                    <div className="bm-item">
                        <Link to={"/home"}>Home</Link>
                    </div>
                    <div className="bm-item">
                        <Link to={"/vuelos"}>Vuelos</Link>
                    </div>
                    <div className="bm-item">
                        <a id="contact" className="menu-item" href="/contact">Contact</a>
                    </div>
                </div>
            </Menu>
        );
    }
}
export default Navegador;