import React, { Component } from 'react';
import { Row, Col, UncontrolledTooltip, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

class Asientos extends Component {
    state = {
        modalOcupado: false,
        modal: false
    };
    confirmar = props => {
        window.location.href= '/gracias'
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
        window.location.href='/final'
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
                    <Button onClick={this.toggle} outline color={"danger"}>
                        <img id={"a4"} alt="x" src="https://img.icons8.com/plasticine/100/000000/delete-sign.png" width={"30"} height={"30"}/>
                        <UncontrolledTooltip placement="right" target="a4">
                            Ocupado
                        </UncontrolledTooltip>
                    </Button>
                </Col>
                </Row>
                <Row>
                    <Col>2</Col>
                    <Col>
                        <Button onClick={this.toggleNoOcup} outline color={"success"}>
                            <img id={"a2"} alt="x" src="https://img.icons8.com/doodle/50/000000/checkmark.png" width={"30"} height={"30"}/>
                            <UncontrolledTooltip placement="right" target="a2">
                                Disponible
                            </UncontrolledTooltip>
                        </Button>
                    </Col>
                    <Col>
                        <Button onClick={this.toggleNoOcup} outline color={"success"}>
                            <img id={"b2"} alt="x" src="https://img.icons8.com/doodle/50/000000/checkmark.png" width={"30"} height={"30"}/>
                            <UncontrolledTooltip placement="right" target="b2">
                                Disponible
                            </UncontrolledTooltip>
                        </Button>
                    </Col>
                    <Col/>
                    <Col>
                        <Button onClick={this.toggle} outline color={"danger"}>
                            <img id={"d2"} alt="x" src="https://img.icons8.com/plasticine/100/000000/delete-sign.png" width={"30"} height={"30"}/>
                            <UncontrolledTooltip placement="right" target="d2">
                                Ocupado
                            </UncontrolledTooltip>
                        </Button>
                    </Col>
                    <Col>
                        <Button onClick={this.toggle} outline color={"danger"}>
                            <img id={"e2"} alt="x" src="https://img.icons8.com/plasticine/100/000000/delete-sign.png" width={"30"} height={"30"}/>
                            <UncontrolledTooltip placement="right" target="e2">
                                Ocupado
                            </UncontrolledTooltip>
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>3</Col>
                    <Col>
                        <Button onClick={this.toggle} outline color={"danger"}>
                            <img id={"a3"} alt="x" src="https://img.icons8.com/plasticine/100/000000/delete-sign.png" width={"30"} height={"30"}/>
                            <UncontrolledTooltip placement="right" target="a3">
                                Ocupado
                            </UncontrolledTooltip>
                        </Button>
                    </Col>
                    <Col>
                        <Button onClick={this.toggle} outline color={"danger"}>
                            <img id={"b3"} alt="x" src="https://img.icons8.com/plasticine/100/000000/delete-sign.png" width={"30"} height={"30"}/>
                            <UncontrolledTooltip placement="right" target="b3">
                                Ocupado
                            </UncontrolledTooltip>
                        </Button>
                    </Col>
                    <Col/>
                    <Col>
                        <Button onClick={this.toggle} outline color={"danger"}>
                            <img id={"d3"} alt="x" src="https://img.icons8.com/plasticine/100/000000/delete-sign.png" width={"30"} height={"30"}/>
                            <UncontrolledTooltip placement="right" target="d3">
                                Ocupado
                            </UncontrolledTooltip>
                        </Button>
                    </Col>
                    <Col>
                        <Button onClick={this.toggle} outline color={"danger"}>
                            <img id={"d3"} alt="x" src="https://img.icons8.com/plasticine/100/000000/delete-sign.png" width={"30"} height={"30"}/>
                            <UncontrolledTooltip placement="right" target="d3">
                                Ocupado
                            </UncontrolledTooltip>
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>4</Col>
                    <Col>
                        <Button onClick={this.toggle} outline color={"danger"}>
                            <img id={"a4"} alt="x" src="https://img.icons8.com/plasticine/100/000000/delete-sign.png" width={"30"} height={"30"}/>
                            <UncontrolledTooltip placement="right" target="a4">
                                Ocupado
                            </UncontrolledTooltip>
                        </Button>
                    </Col>
                    <Col>
                        <Button onClick={this.toggle} outline color={"danger"}>
                            <img id={"b4"} alt="x" src="https://img.icons8.com/plasticine/100/000000/delete-sign.png" width={"30"} height={"30"}/>
                            <UncontrolledTooltip placement="right" target="b4">
                                Ocupado
                            </UncontrolledTooltip>
                        </Button>
                    </Col>
                    <Col/>
                    <Col>
                        <Button onClick={this.toggle} outline color={"danger"}>
                            <img id={"d4"} alt="x" src="https://img.icons8.com/plasticine/100/000000/delete-sign.png" width={"30"} height={"30"}/>
                            <UncontrolledTooltip placement="right" target="d4">
                                Ocupado
                            </UncontrolledTooltip>
                        </Button>
                    </Col>
                    <Col>
                        <Button onClick={this.toggle} outline color={"danger"}>
                            <img id={"e4"} alt="x" src="https://img.icons8.com/plasticine/100/000000/delete-sign.png" width={"30"} height={"30"}/>
                            <UncontrolledTooltip placement="right" target="e4">
                                Ocupado
                            </UncontrolledTooltip>
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>5</Col>
                    <Col>
                        <Button onClick={this.toggle} outline color={"danger"}>
                            <img id={"a5"} alt="x" src="https://img.icons8.com/plasticine/100/000000/delete-sign.png" width={"30"} height={"30"}/>
                            <UncontrolledTooltip placement="right" target="a5">
                                Ocupado
                            </UncontrolledTooltip>
                        </Button>
                    </Col>
                    <Col>
                        <Button onClick={this.toggle} outline color={"danger"}>
                            <img id={"b5"} alt="x" src="https://img.icons8.com/plasticine/100/000000/delete-sign.png" width={"30"} height={"30"}/>
                            <UncontrolledTooltip placement="right" target="b5">
                                Ocupado
                            </UncontrolledTooltip>
                        </Button>
                    </Col>
                    <Col/>
                    <Col>
                        <Button onClick={this.toggle} outline color={"danger"}>
                            <img id={"d5"} alt="x" src="https://img.icons8.com/plasticine/100/000000/delete-sign.png" width={"30"} height={"30"}/>
                            <UncontrolledTooltip placement="right" target="d5">
                                Ocupado
                            </UncontrolledTooltip>
                        </Button>
                    </Col>
                    <Col>
                        <Button onClick={this.toggleNoOcup} outline color={"success"}>
                            <img id={"d5"} alt="x" src="https://img.icons8.com/doodle/50/000000/checkmark.png" width={"30"} height={"30"}/>
                            <UncontrolledTooltip placement="right" target="d5">
                                Disponible
                            </UncontrolledTooltip>
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>6</Col>
                    <Col>
                        <Button onClick={this.toggleNoOcup} outline color={"success"}>
                            <img id={"a6"} alt="x" src="https://img.icons8.com/doodle/50/000000/checkmark.png" width={"30"} height={"30"}/>
                            <UncontrolledTooltip placement="right" target="a6">
                                Disponible
                            </UncontrolledTooltip>
                        </Button>
                    </Col>
                    <Col>
                        <Button onClick={this.toggleNoOcup} outline color={"success"}>
                            <img id={"b6"} alt="x" src="https://img.icons8.com/doodle/50/000000/checkmark.png" width={"30"} height={"30"}/>
                            <UncontrolledTooltip placement="right" target="b6">
                                Disponible
                            </UncontrolledTooltip>
                        </Button>
                    </Col>
                    <Col/>
                    <Col>
                        <Button onClick={this.toggleNoOcup} outline color={"success"}>
                            <img id={"d6"} alt="x" src="https://img.icons8.com/doodle/50/000000/checkmark.png" width={"30"} height={"30"}/>
                            <UncontrolledTooltip placement="right" target="d6">
                                Disponible
                            </UncontrolledTooltip>
                        </Button>
                    </Col>
                    <Col>
                        <Button onClick={this.toggle} outline color={"danger"}>
                            <img id={"e6"} alt="x" src="https://img.icons8.com/plasticine/100/000000/delete-sign.png" width={"30"} height={"30"}/>
                            <UncontrolledTooltip placement="right" target="e6">
                                Ocupado
                            </UncontrolledTooltip>
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>7</Col>
                    <Col>
                        <Button onClick={this.toggleNoOcup} outline color={"success"}>
                            <img id={"a7"} alt="x" src="https://img.icons8.com/doodle/50/000000/checkmark.png" width={"30"} height={"30"}/>
                            <UncontrolledTooltip placement="right" target="a7">
                                Disponible
                            </UncontrolledTooltip>
                        </Button>
                    </Col>
                    <Col>
                        <Button onClick={this.toggle} outline color={"danger"}>
                            <img id={"b7"} alt="x" src="https://img.icons8.com/plasticine/100/000000/delete-sign.png" width={"30"} height={"30"}/>
                            <UncontrolledTooltip placement="right" target="b7">
                                Ocupado
                            </UncontrolledTooltip>
                        </Button>
                    </Col>
                    <Col/>
                    <Col>
                        <Button onClick={this.toggleNoOcup} outline color={"success"}>
                            <img id={"d7"} alt="x" src="https://img.icons8.com/doodle/50/000000/checkmark.png" width={"30"} height={"30"}/>
                            <UncontrolledTooltip placement="right" target="d7">
                                Disponible
                            </UncontrolledTooltip>
                        </Button>
                    </Col>
                    <Col>
                        <Button onClick={this.toggle} outline color={"danger"}>
                            <img id={"e7"} alt="x" src="https://img.icons8.com/plasticine/100/000000/delete-sign.png" width={"30"} height={"30"}/>
                            <UncontrolledTooltip placement="right" target="e7">
                                Ocupado
                            </UncontrolledTooltip>
                        </Button>
                    </Col>
                </Row>
                <div className={"container"}>
                    <span className={"colorsitos"}>POR FAVOR ESCOJA LOS ASIENTOS QUE DESEA</span>
                </div>
            </div>

            {/* MODAL PARA DECIR QUE ESTA OCUPADO */}
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

            {/* MODAL PARA DECIR QUE ESTA NO ESTA OCUPADO */}
            <Modal isOpen={this.state.modal} toggle={this.toggleNoOcup} >
                <ModalHeader toggle={this.toggleNoOcup}>Grandioso</ModalHeader>
                <ModalBody>
                    El puesto que ha escogido se encuentra disponible, ¿desea confirmarlo?
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={this.confirmar}>Confirmar asiento</Button>{' '}
                    <Button color="danger" onClick={this.toggleNoOcup}>Volver</Button>
                </ModalFooter>
            </Modal>
        </div>
        );
    }
}
export default Asientos;