import { stack as Menu } from 'react-burger-menu'
import React from 'react'

class Example extends React.Component {
    showSettings (event) {
        event.preventDefault();
    }

    render () {
        return (

                <Menu className="bm-menu " right>
                    <div className="bm-item-list">
                        <div className="bm-item">
                            <a id="home" className="menu-item" href="/">Home</a>
                        </div>
                        <div className="bm-item">
                            <a id="about" className="menu-item" href="/about">About</a>
                        </div>
                        <div className="bm-item">
                            <a id="contact" className="menu-item" href="/contact">Contact</a>
                        </div>
                        <div className="bm-item">
                            <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
                        </div>
                    </div>
                </Menu>
        );
    }
}
export default Example;