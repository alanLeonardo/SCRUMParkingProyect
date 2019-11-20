import React from 'react';
import './CSS/GRIDParking.css';
import Swal from 'sweetalert2';
import swal from 'sweetalert';
import {Link} from 'react-router-dom';


var a1,a2,a3,a4,a5,a6,a7,a8,b1,b2,b3,b4,b5,b6,b7,b8,c1,c2,c3,c4,c5,c6,c7,c8,d1,d2,d3,d4,d5,d6,d7,d8,e1,e2,e3,e4,e5,e6,e7,e8,f1,f2,f3,f4,f5,f6,f7,f8,g1,g2,g3,g4,g5,g6,g7,g8,h1,h2,h3,h4,h5,h6,h7,h8 = ''

const ESTADO_INICIAL = [a1,a2,a3,a4,a5,a6,a7,a8,
                b1,b2,b3,b4,b5,b6,b7,b8,
                c1,c2,c3,c4,c5,c6,c7,c8,
                d1,d2,d3,d4,d5,d6,d7,d8,
                e1,e2,e3,e4,e5,e6,e7,e8,
                f1,f2,f3,f4,f5,f6,f7,f8,
                g1,g2,g3,g4,g5,g6,g7,g8,
                h1,h2,h3,h4,h5,h6,h7,h8]


class GRIDParking extends React.Component {

     constructor(props){
            super(props);

            this.state = {
                titulo: 'GRIDParking',
                lugares: ESTADO_INICIAL,
                index: '',
                lugarActual: '',
                patente: '',
                tipoVehiculo: '',
                marca: '',
                modelo: '',
                documento: '',
                nombre: '',
                apellido: '',
                valor: 100
            }
        }
        onClearArray = () => {
            this.setState(state => {
                const lugares = state.lugares.map(lugar => lugar = '');
                return {lugares};
            });
        };
        modify = (event) => {
            event.preventDefault();
            this.setState({index: event.target.getAttribute('data-index')});
            swal("GRIDParking! Elija una opción:", {
                buttons: {
                    cargarDatos: "Ingresar Vehiculo",
                    verDatos: "Ver Datos",
                    catch: "Retirar Vehiculo",
                    cancel: "Cancelar"
                },
            })
            .then((value) => {
                switch (value) {
                  case "catch":
                    swal("Vehiculo retirado!", `Valor: $${this.state.valor}`, "success");
                    break;

                    case "cargarDatos":
                    this.cargarDatos();
                    break;

                    case "verDatos":
                    this.verDatos();
                    break;

                  default:
                }
              });

            // Swal.mixin({
            //     input: 'text',
            //     confirmButtonText: 'Next &rarr;',
            //     showCancelButton: true,
            //     progressSteps: ['1', '2', '3']
            // }).queue([
            //     {
            //         title: 'Patente',
            //         text: ''
            //     },
            //     'Nombre',
            //     'Apellido'
            // ]).then((result) => {
            //     if (result.value) {
            //         Swal.fire({
            //             title: 'All done!',
            //             html:
            //                 'Datos: <br/>' +
            //                 'Patente ' + result.value[0] + '<br/>' +
            //                 'Nombre ' + result.value[1] + '<br/>' +
            //                 'Apellido ' + result.value[2],
            //             confirmButtonText: 'Aceptar'
            //         });
            //         this.setState(state => {
            //             const lugares = state.lugares.map((lugar, i) => {
            //                 if(index == i){
            //                     lugar = result.value[0];
            //                     return lugar;
            //                 }
            //             });
            //             return {lugares};
            //         })
            //     }
            // })
        }

        cargarDatos = () => {
            Swal.mixin({
                input: 'text',
                confirmButtonText: 'Next &rarr;',
                showCancelButton: true,
                progressSteps: ['1', '2', '3', '4', '5','6']
            }).queue([
                'Patente',
                'TipoVehiculo',
                'Marca',
                'Modelo',
                'DocumentoPropietario',
                'NombrePropietario',
                'ApellidoPropietario',
            ]).then((result) => {
                if (result.value) {
                    this.setState({ patente: result.value[0] })
                    this.setState({ tipoVehiculo: result.value[1] })
                    this.setState({ marca: result.value[2] })
                    this.setState({ modelo: result.value[3] })
                    this.setState({ documento: result.value[4] })
                    this.setState({ nombre: result.value[5] })
                    this.setState({ apellido: result.value[6] })

                    // this.setState(state => {
                    //     const lugares = state.lugares.map((lugar, i) => {
                    //         if(this.state.index == i){
                    //             lugar.patente = result.value[0];
                    //             lugar.marca = result.value[1];
                    //             lugar.modelo = result.value[2];
                    //             lugar.nombre = result.value[3];
                    //             lugar.apellido = result.value[4];
                    //             this.setState({ lugarActual:lugar });
                    //             return lugar;
                    //         }
                    //     });
                    //     return {lugares};
                    // })

                    this.verDatos();
                    this.setState(state => {
                        const lugares = state.lugares.map((lugar, i) => {
                            if(this.state.index == i){
                                lugar = result.value[0];
                                return lugar;
                            }
                        });
                        return {lugares};
                    })
                }
            })
        }

        verDatos() {
            Swal.fire({
                title: 'Vehiculo ingresado!',
                html:
                    '<strong><u> DATOS </u></strong><br/>' +
                    '<strong> Patente: </strong>' + this.state.patente + '<br/>' +
                    '<strong> TipoVehiculo: </strong>' + this.state.tipoVehiculo + '<br/>' +
                    '<strong> Marca: </strong>' + this.state.marca + '<br/>' +
                    '<strong> Modelo: </strong>' + this.state.modelo + '<br/>' +
                    '<strong> DocumentoPropietario: </strong>' + this.state.documento + '<br/>' +
                    '<strong> NombrePropietario: </strong>' + this.state.nombre + '<br/>' +
                    '<strong> ApellidoApellido: </strong>' + this.state.apellido,
                confirmButtonText: 'Aceptar'
            });
        }

        render() {
            return(
                <div className="grid">
                    {this.state.lugares.map((lugar, index) => {
                        return (<button className="btn btn-dark item-grid" onClick={this.modify} data-index={index} key={index}>{lugar}</button>)
                    })}
                    <div className="clearArray">
                        <button type="button" onClick={this.onClearArray}>
                            Desocupar parcelas
                        </button>
                        <Link to="/"> Home </Link>
                    </div>
                </div>
            )
        }
}
export default GRIDParking;