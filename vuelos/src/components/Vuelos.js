import React from 'react'
import Calendario from './Calendario'
import { FormGroup, Form, Input, Button,Label } from 'reactstrap'
class Vuelos extends React.Component {
    state ={
        idaVuelta: false
    };
    handleIdaVuelta=(event)=> {
        this.setState({idaVuelta: !this.state.idaVuelta});
    };
    render () {
        return (
            <div>
                <h1 className={"text-white"}>Vuelos a todos los destino</h1>
                <Form>
                    <div className={"row"}>
                        <div className={"col"}>
                            <span className={"text-white"}> Ciudad Origen</span><br/>
                            <Input type={"text"} id={"Origen"} placeholder={"Origen"} />
                        </div>
                        <div className={"col"}>
                            <span className={"text-white col-md-12"}> Ciudad Destino</span><br/>
                            <Input type={"text"} id={"Destino"} placeholder={"Destino"} />
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"col"}>
                            <span className={"text-white"}>Tipo de viaje</span><br/>
                            <Input type="select" name="tipoViaje" id="tipoViaje" onChange={this.handleIdaVuelta}>
                                <option value={true}>Solo ida</option>
                                <option value={false}>Ida y vuelta</option>
                            </Input>
                        </div>
                        {this.state.idaVuelta?<> <Calendario id={"Ida"}/> <Calendario id={"Vuelta"}/></> : <Calendario id={"Ida"}/>}


                    </div>
                       <div className={"row"}>
                           <div className={"col"}>
                               <span className={"text-white"}> Pasajeros</span><br/>
                               <FormGroup>
                                   <Input type="select" name="select" id="exampleSelect">
                                       <option>1</option>
                                       <option>2</option>
                                       <option>3</option>
                                       <option>4</option>
                                       <option>5</option>
                                   </Input>
                               </FormGroup>
                           </div>
                       </div>
                    <div className={"center"}>
                        <Button id={"boton"} >Buscar</Button>
                    </div>
                </Form>
                <span>{}</span>
            </div>
        );
    }
}
export default Vuelos;

