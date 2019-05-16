import React from 'react'
import Calendario from './Calendario'
import { FormGroup, Form, Input, Button,Label } from 'reactstrap'
import { Redirect } from 'react-dom'

const validate = values =>{
    const errors ={};
    if (!values.origen){
        errors.origen = "La ciudad de origen es obligatoria"
    }
    if (!values.destino){
        errors.destino = "La ciudad destino es obligatoria"
    }
    if (!values.adultos){
        errors.adultos = "Debe ir almenos un adulto"
    }
    return errors;
};
class Vuelos extends React.Component {
    state ={
        idaVuelta: false,
        errors: {}
    };
    handleIdaVuelta=(event)=> {
        this.setState({idaVuelta: !this.state.idaVuelta});
    };
    handleSubmit = e => {
        e.preventDefault();
        const { errors, idaVuelta, ...sinErrors } = this.state;
        const result = validate(sinErrors);

        this.setState({errors: result});
        if (!Object.keys(result).length){
            //Aqui se envia el formulario
            window.location.href = '/asientos'
        }
    };
    handleChange=({target})=>{
        const { name, value } = target;
        this.setState({[name]: value})
    };
    render () {
        const { errors } = this.state;
        return (
            <div className={"card"}>
            <div className={"container"}>
                <h1 className={"text-vuelos"}>Vuelos a todos los destino</h1>
                <Form>
                    <div className={"row"}>
                        <div className={"col"}>
                            <Label className={"text-vuelos"}>Ciudad Origen</Label><br/>
                            <Input name={"origen"} type={"text"} id={"Origen"} placeholder={"Origen"} onChange={this.handleChange}/>
                            {errors.origen && <p> {errors.origen} </p>}
                        </div>
                        <div className={"col"}>
                            <Label className={"text-vuelos"}>Ciudad Destino</Label><br/>
                            <Input name={"destino"} type={"text"} id={"Destino"} placeholder={"Destino"} onChange={this.handleChange} />
                            {errors.destino && <p> {errors.destino} </p>}

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
                                   <Input name={"adultos"} type="select" id="exampleSelect" onChange={this.handleChange}>
                                       <option>0</option>
                                       <option>1</option>
                                       <option>2</option>
                                       <option>3</option>
                                       <option>4</option>
                                       <option>5</option>
                                   </Input>
                                   {errors.adultos && <p> {errors.adultos} </p>}
                               </FormGroup>
                           </div>
                           <div className={"col"}>
                               <Label className={"text-vuelos"}>Niños</Label><br/>
                               <Input name={"niños"} type="select" id="exampleSelect" >
                                   <option>0</option>
                                   <option>1</option>
                                   <option>2</option>
                                   <option>3</option>
                                   <option>4</option>
                               </Input>
                           </div>
                       </div>
                    <div className={"center"}>
                        <Button id={"boton"} onClick={this.handleSubmit} >Buscar</Button>
                    </div>
                </Form>
                <span>{}</span>
            </div>
            </div>
        );
    }
}
export default Vuelos;

