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
            <div className={"card"}>
            <div className={"container"}>
                <h1 className={"text-vuelos"}>Vuelos a todos los destino</h1>
                <Form>
                    <div className={"row"}>
                        <div className={"col"}>
                            <Label className={"text-vuelos"}>Ciudad Origen</Label><br/>
                            <Input type={"text"} id={"Origen"} placeholder={"Origen"} />
                        </div>
                        <div className={"col"}>
                            <Label className={"text-vuelos"}>Ciudad Destino</Label><br/>
                            <Input type={"text"} id={"Destino"} placeholder={"Destino"} />
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"col"}>
                            <Label className={"text-vuelos"}>Tipo de viaje</Label><br/>
                            <Input type="select" name="tipoViaje" id="tipoViaje" onChange={this.handleIdaVuelta}>
                                <option value={true}>Solo ida</option>
                                <option value={false}>Ida y vuelta</option>
                            </Input>
                        </div>
                        {this.state.idaVuelta?<> <Calendario id={"Ida"}/> <Calendario id={"Vuelta"}/></> : <Calendario id={"Ida"}/>}

                    </div>
                    <Label className={"text-vuelos"}>Pasajeros</Label><br/>
                       <div className={"row"}>
                           <div className={"col"}>
                               <Label className={"text-vuelos"}>Adultos</Label><br/>
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
                           <div className={"col"}>
                               <Label className={"text-vuelos"}>Niños</Label><br/>
                               <Input type="select" name="select" id="exampleSelect">
                                   <option>0</option>
                                   <option>1</option>
                                   <option>2</option>
                                   <option>3</option>
                                   <option>4</option>
                               </Input>
                           </div>
                       </div>
                    <div className={"center"}>
                        <Button id={"boton"} >Buscar</Button>
                    </div>
                </Form>
                <span>{}</span>
            </div>
            </div>
        );
    }
}
export default Vuelos;

