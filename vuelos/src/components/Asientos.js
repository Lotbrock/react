import React, { Component } from 'react';
import { Row, Col, UncontrolledTooltip, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

class Asientos extends Component {
    state = {
        modalOcupado: false,
        modal: false
    };
    toggleNoOcup = props =>{
        this.setState({ modal : !this.state.modal
        });
    };
    toggle=props=> {
        this.setState({ modalOcupado: !this.state.modalOcupado
        });
    };
    handleVolverVuelos = props =>{
        window.location.href='/vuelos'
    };
    render() {
    return (
        <div className={"card"}>
            <h1 className={"text-center"}>Economico</h1>
            <div className="asientos">
                <h5 className={"text-center"}>Columnas</h5>
                <Row>
                    <Col>0</Col>
                    <Col>A</Col>
                    <Col>B</Col>
                    <Col/>
                    <Col>D</Col>
                    <Col>E</Col>
                </Row>
                <br/>
                <Row>
                    <Col>1</Col>
                    <Col>
                        <Button onClick={this.toggle} outline color={"danger"}>
                        <img id={"a1"} alt="x" src="https://img.icons8.com/plasticine/100/000000/delete-sign.png" width={"30"} height={"30"}/>
                        <UncontrolledTooltip placement="right" target="a1">
                            Ocupado
                        </UncontrolledTooltip>
                        </Button>
                    </Col>
                    <Col>
                        <Button onClick={this.toggle} outline color={"danger"}>
                            <img id={"a2"} alt="x" src="https://img.icons8.com/plasticine/100/000000/delete-sign.png" width={"30"} height={"30"}/>
                            <UncontrolledTooltip placement="right" target="a2">
                                Ocupado
                            </UncontrolledTooltip>
                        </Button>
                    </Col>
                    <Col/>
                    <Col>
                    <Button onClick={this.toggleNoOcup} outline color={"success"}>
                        <img id={"a3"} alt="x" src="https://img.icons8.com/doodle/50/000000/checkmark.png" width={"30"} height={"30"}/>
                        <UncontrolledTooltip placement="right" target="a3">
                            Disponible
                        </UncontrolledTooltip>
                    </Button>
                </Col>
                    <Col>
                    <Button outline color={"danger"}>
                        <img id={"a4"} alt="x" src="https://img.icons8.com/plasticine/100/000000/delete-sign.png" width={"30"} height={"30"}/>
                        <UncontrolledTooltip placement="right" target="a4">
                            Ocupado
                        </UncontrolledTooltip>
                    </Button>
                </Col>
                </Row>

                <Row>
                    <Col>2</Col>
                    <Col><img alt="x" src="https://img.icons8.com/plasticine/100/000000/delete-sign.png" width={"30"} height={"30"}/></Col>
                    <Col><img alt="x" src="https://img.icons8.com/plasticine/100/000000/delete-sign.png" width={"30"} height={"30"}/></Col>
                    <Col/>
                    <Col><img alt="x" src="https://img.icons8.com/plasticine/100/000000/delete-sign.png" width={"30"} height={"30"}/></Col>
                    <Col><img alt="x" src="https://img.icons8.com/plasticine/100/000000/delete-sign.png" width={"30"} height={"30"}/></Col>
                </Row>
                <Row>
                    <Col>3</Col>
                    <Col><img alt="x" src="https://img.icons8.com/plasticine/100/000000/delete-sign.png" width={"30"} height={"30"}/></Col>
                    <Col><img alt="x" src="https://img.icons8.com/plasticine/100/000000/delete-sign.png" width={"30"} height={"30"}/></Col>
                    <Col/>
                    <Col><img alt="x" src="https://img.icons8.com/plasticine/100/000000/delete-sign.png" width={"30"} height={"30"}/></Col>
                    <Col><img alt="x" src="https://img.icons8.com/plasticine/100/000000/delete-sign.png" width={"30"} height={"30"}/></Col>
                </Row>

                <Row>
                    <Col>4</Col>
                    <Col><img alt="x" src="https://img.icons8.com/plasticine/100/000000/delete-sign.png" width={"30"} height={"30"}/></Col>
                    <Col><img alt="x" src="https://img.icons8.com/plasticine/100/000000/delete-sign.png" width={"30"} height={"30"}/></Col>
                    <Col/>
                    <Col><img alt="x" src="https://img.icons8.com/plasticine/100/000000/delete-sign.png" width={"30"} height={"30"}/></Col>
                    <Col><img alt="x" src="https://img.icons8.com/plasticine/100/000000/delete-sign.png" width={"30"} height={"30"}/></Col>
                </Row>

                <Row>
                    <Col>5</Col>
                    <Col><img alt="x" src="https://img.icons8.com/plasticine/100/000000/delete-sign.png" width={"30"} height={"30"}/></Col>
                    <Col><img alt="x" src="https://img.icons8.com/plasticine/100/000000/delete-sign.png" width={"30"} height={"30"}/></Col>
                    <Col/>
                    <Col><img alt="x" src="https://img.icons8.com/plasticine/100/000000/delete-sign.png" width={"30"} height={"30"}/></Col>
                    <Col><img alt="x" src="https://img.icons8.com/plasticine/100/000000/delete-sign.png" width={"30"} height={"30"}/></Col>
                </Row>
            </div>

           /* MODAL PARA DECIR QUE ESTA OCUPADO */
            <Modal isOpen={this.state.modalOcupado} toggle={this.toggle} >
                <ModalHeader toggle={this.toggle}>No disponible</ModalHeader>
                <ModalBody>
                   Lo sentimos, este puesto se encuentra ocupado, por favor escoja otro.
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={this.handleVolverVuelos}>Volver a vuelos</Button>{' '}
                    <Button color="success" onClick={this.toggle}>Vale</Button>
                </ModalFooter>
            </Modal>

            /* MODAL PARA DECIR QUE ESTA NO ESTA OCUPADO */
            <Modal isOpen={this.state.modal} toggle={this.toggleNoOcup} >
                <ModalHeader toggle={this.toggleNoOcup}>Grandioso</ModalHeader>
                <ModalBody>
                    El puesto que ha escogido se encuentra disponible, ¿desea confirmarlo?
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={this.handleVolverVuelos}>Volver a vuelos</Button>{' '}
                    <Button color="success" onClick={this.toggleNoOcup}>Vale</Button>
                </ModalFooter>
            </Modal>
        </div>
        );
    }
}
export default Asientos;