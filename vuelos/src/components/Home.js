import React from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Button } from 'reactstrap'
class Home extends React.Component {

    render () {
        return (
            <div>
                <Jumbotron>
                    <h1 className="display-3">¡BIENBENIDO a LATAM!</h1>
                    <p className="lead">Esta es tu pagina preferida para comprar tus vuelos y reservarlos.</p>
                    <hr className="my-2" />
                    <p>Te invitamos a ver los vuelos disponibles para compra o reserva en funcion a los pasajeros a continuacion.</p>
                    <p className="lead">
                        <Link to={"/vuelos"}>
                        <Button color="primary">Compra o reserva</Button>
                        </Link>

                    </p>
                </Jumbotron>
            </div>
        );
    }
}
export default Home;

