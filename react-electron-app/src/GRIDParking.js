import React from 'react';
import './CSS/GRIDParking.css';
import Swal from 'sweetalert2';
import swal from 'sweetalert';
import {Link} from 'react-router-dom';
//import GridLayout from 'react-grid-layout';
/*
var a1,a2,a3,a4,a5,a6,a7,a8,b1,b2,b3,b4,b5,b6,b7,b8,c1,c2,c3,c4,c5,c6,c7,c8,d1,d2,d3,d4,d5,d6,d7,d8,e1,e2,e3,e4,e5,e6,e7,e8,f1,f2,f3,f4,f5,f6,f7,f8,g1,g2,g3,g4,g5,g6,g7,g8,h1,h2,h3,h4,h5,h6,h7,h8 = ''

const ESTADO_INICIAL = [a1,a2,a3,a4,a5,a6,a7,a8,
                b1,b2,b3,b4,b5,b6,b7,b8,
                c1,c2,c3,c4,c5,c6,c7,c8,
                d1,d2,d3,d4,d5,d6,d7,d8,
                e1,e2,e3,e4,e5,e6,e7,e8,
                f1,f2,f3,f4,f5,f6,f7,f8,
                g1,g2,g3,g4,g5,g6,g7,g8,
                h1,h2,h3,h4,h5,h6,h7,h8]
*/

let a1 = [      "",       //patente: '',
                 "",      //tipoVehiculo: '',
                 "",      //marca: '',
                 "",       //modelo: '',
                 "",       //documento: '',
                 "",       //nombre: '',
                 "",       //apellido: '',
                 100,       //valor: 100,
                 ""       //horaEntrada: ''
         ]

let a2 = [    "",       //patente: '',
              "",      //tipoVehiculo: '',
              "",      //marca: '',
              "",       //modelo: '',
              "",       //documento: '',
              "",       //nombre: '',
              "",       //apellido: '',
              100,       //valor: 100,
              ""       //horaEntrada: ''
         ]

let a3 = [    "",       //patente: '',
              "",      //tipoVehiculo: '',
              "",      //marca: '',
              "",       //modelo: '',
              "",       //documento: '',
              "",       //nombre: '',
              "",       //apellido: '',
              100,       //valor: 100,
              ""       //horaEntrada: ''
         ]

let a4 = [    "",       //patente: '',
              "",      //tipoVehiculo: '',
              "",      //marca: '',
              "",       //modelo: '',
              "",       //documento: '',
              "",       //nombre: '',
              "",       //apellido: '',
              100,       //valor: 100,
              ""       //horaEntrada: ''
         ]

let a5 = [    "",       //patente: '',
              "",      //tipoVehiculo: '',
              "",      //marca: '',
              "",       //modelo: '',
              "",       //documento: '',
              "",       //nombre: '',
              "",       //apellido: '',
              100,       //valor: 100,
              ""       //horaEntrada: ''
         ]

let a6 = [    "",       //patente: '',
              "",      //tipoVehiculo: '',
              "",      //marca: '',
              "",       //modelo: '',
              "",       //documento: '',
              "",       //nombre: '',
              "",       //apellido: '',
              100,       //valor: 100,
              ""       //horaEntrada: ''
         ]

let a7 = [    "",       //patente: '',
              "",      //tipoVehiculo: '',
              "",      //marca: '',
              "",       //modelo: '',
              "",       //documento: '',
              "",       //nombre: '',
              "",       //apellido: '',
              100,       //valor: 100,
              ""       //horaEntrada: ''
         ]

let a8 = [    "",       //patente: '',
              "",      //tipoVehiculo: '',
              "",      //marca: '',
              "",       //modelo: '',
              "",       //documento: '',
              "",       //nombre: '',
              "",       //apellido: '',
              100,       //valor: 100,
              ""       //horaEntrada: ''
         ]

let b1 = [    "",       //patente: '',
              "",      //tipoVehiculo: '',
              "",      //marca: '',
              "",       //modelo: '',
              "",       //documento: '',
              "",       //nombre: '',
              "",       //apellido: '',
              100,       //valor: 100,
              ""       //horaEntrada: ''
         ]

let b2 = [    "",       //patente: '',
              "",      //tipoVehiculo: '',
              "",      //marca: '',
              "",       //modelo: '',
              "",       //documento: '',
              "",       //nombre: '',
              "",       //apellido: '',
              100,       //valor: 100,
              ""       //horaEntrada: ''
         ]

let b3 = [    "",       //patente: '',
               "",      //tipoVehiculo: '',
               "",      //marca: '',
               "",       //modelo: '',
               "",       //documento: '',
               "",       //nombre: '',
               "",       //apellido: '',
               100,       //valor: 100,
               ""       //horaEntrada: ''
          ]

let b4 = [    "",       //patente: '',
              "",      //tipoVehiculo: '',
              "",      //marca: '',
              "",       //modelo: '',
              "",       //documento: '',
              "",       //nombre: '',
              "",       //apellido: '',
              100,       //valor: 100,
              ""       //horaEntrada: ''
         ]

let b5 = [    "",       //patente: '',
              "",      //tipoVehiculo: '',
              "",      //marca: '',
              "",       //modelo: '',
              "",       //documento: '',
              "",       //nombre: '',
              "",       //apellido: '',
              100,       //valor: 100,
              ""       //horaEntrada: ''
         ]

let b6 = [    "",       //patente: '',
              "",      //tipoVehiculo: '',
              "",      //marca: '',
              "",       //modelo: '',
              "",       //documento: '',
              "",       //nombre: '',
              "",       //apellido: '',
              100,       //valor: 100,
              ""       //horaEntrada: ''
         ]

let b7 = [    "",       //patente: '',
              "",      //tipoVehiculo: '',
              "",      //marca: '',
              "",       //modelo: '',
              "",       //documento: '',
              "",       //nombre: '',
              "",       //apellido: '',
              100,       //valor: 100,
              ""       //horaEntrada: ''
         ]


let b8 = [    "",       //patente: '',
              "",      //tipoVehiculo: '',
              "",      //marca: '',
              "",       //modelo: '',
              "",       //documento: '',
              "",       //nombre: '',
              "",       //apellido: '',
              100,       //valor: 100,
              ""       //horaEntrada: ''
         ]

let c1 = [    "",       //patente: '',
              "",      //tipoVehiculo: '',
              "",      //marca: '',
              "",       //modelo: '',
              "",       //documento: '',
              "",       //nombre: '',
              "",       //apellido: '',
              100,       //valor: 100,
              ""       //horaEntrada: ''
         ]

let c2 = [    "",       //patente: '',
              "",      //tipoVehiculo: '',
              "",      //marca: '',
              "",       //modelo: '',
              "",       //documento: '',
              "",       //nombre: '',
              "",       //apellido: '',
              100,       //valor: 100,
              ""       //horaEntrada: ''
         ]

let c3 = [    "",       //patente: '',
              "",      //tipoVehiculo: '',
              "",      //marca: '',
              "",       //modelo: '',
              "",       //documento: '',
              "",       //nombre: '',
              "",       //apellido: '',
              100,       //valor: 100,
              ""       //horaEntrada: ''
         ]

let c4 = [    "",       //patente: '',
              "",      //tipoVehiculo: '',
              "",      //marca: '',
              "",       //modelo: '',
              "",       //documento: '',
              "",       //nombre: '',
              "",       //apellido: '',
              100,       //valor: 100,
              ""       //horaEntrada: ''
         ]

let c5 = [    "",       //patente: '',
              "",      //tipoVehiculo: '',
              "",      //marca: '',
              "",       //modelo: '',
              "",       //documento: '',
              "",       //nombre: '',
              "",       //apellido: '',
              100,       //valor: 100,
              ""       //horaEntrada: ''
         ]

let c6 = [    "",       //patente: '',
              "",      //tipoVehiculo: '',
              "",      //marca: '',
              "",       //modelo: '',
              "",       //documento: '',
              "",       //nombre: '',
              "",       //apellido: '',
              100,       //valor: 100,
              ""       //horaEntrada: ''
         ]

let c7 = [    "",       //patente: '',
              "",      //tipoVehiculo: '',
              "",      //marca: '',
              "",       //modelo: '',
              "",       //documento: '',
              "",       //nombre: '',
              "",       //apellido: '',
              100,       //valor: 100,
              ""       //horaEntrada: ''
         ]

let c8 = [    "",       //patente: '',
              "",      //tipoVehiculo: '',
              "",      //marca: '',
              "",       //modelo: '',
              "",       //documento: '',
              "",       //nombre: '',
              "",       //apellido: '',
              100,       //valor: 100,
              ""       //horaEntrada: ''
         ]

let d1 = [    "",       //patente: '',
              "",      //tipoVehiculo: '',
              "",      //marca: '',
              "",       //modelo: '',
              "",       //documento: '',
              "",       //nombre: '',
              "",       //apellido: '',
              100,       //valor: 100,
              ""       //horaEntrada: ''
         ]

let d2 = [    "",       //patente: '',
              "",      //tipoVehiculo: '',
              "",      //marca: '',
              "",       //modelo: '',
              "",       //documento: '',
              "",       //nombre: '',
              "",       //apellido: '',
              100,       //valor: 100,
              ""       //horaEntrada: ''
         ]

let d3 = [    "",       //patente: '',
              "",      //tipoVehiculo: '',
              "",      //marca: '',
              "",       //modelo: '',
              "",       //documento: '',
              "",       //nombre: '',
              "",       //apellido: '',
              100,       //valor: 100,
              ""       //horaEntrada: ''
         ]

let d4 = [    "",       //patente: '',
              "",      //tipoVehiculo: '',
              "",      //marca: '',
              "",       //modelo: '',
              "",       //documento: '',
              "",       //nombre: '',
              "",       //apellido: '',
              100,       //valor: 100,
              ""       //horaEntrada: ''
         ]

let d5 = [    "",       //patente: '',
              "",      //tipoVehiculo: '',
              "",      //marca: '',
              "",       //modelo: '',
              "",       //documento: '',
              "",       //nombre: '',
              "",       //apellido: '',
              100,       //valor: 100,
              ""       //horaEntrada: ''
         ]


let d6 = [    "",       //patente: '',
              "",      //tipoVehiculo: '',
              "",      //marca: '',
              "",       //modelo: '',
              "",       //documento: '',
              "",       //nombre: '',
              "",       //apellido: '',
              100,       //valor: 100,
              ""       //horaEntrada: ''
         ]

let d7 = [    "",       //patente: '',
              "",      //tipoVehiculo: '',
              "",      //marca: '',
              "",       //modelo: '',
              "",       //documento: '',
              "",       //nombre: '',
              "",       //apellido: '',
              100,       //valor: 100,
              ""       //horaEntrada: ''
         ]

let d8 = [    "",       //patente: '',
              "",      //tipoVehiculo: '',
              "",      //marca: '',
              "",       //modelo: '',
              "",       //documento: '',
              "",       //nombre: '',
              "",       //apellido: '',
              100,       //valor: 100,
              ""       //horaEntrada: ''
         ]

let e1 = [    "",       //patente: '',
              "",      //tipoVehiculo: '',
              "",      //marca: '',
              "",       //modelo: '',
              "",       //documento: '',
              "",       //nombre: '',
              "",       //apellido: '',
              100,       //valor: 100,
              ""       //horaEntrada: ''
         ]

let e2 = [    "",       //patente: '',
              "",      //tipoVehiculo: '',
              "",      //marca: '',
              "",       //modelo: '',
              "",       //documento: '',
              "",       //nombre: '',
              "",       //apellido: '',
              100,       //valor: 100,
              ""       //horaEntrada: ''
         ]

let e3 = [    "",       //patente: '',
              "",      //tipoVehiculo: '',
              "",      //marca: '',
              "",       //modelo: '',
              "",       //documento: '',
              "",       //nombre: '',
              "",       //apellido: '',
              100,       //valor: 100,
              ""       //horaEntrada: ''
         ]

let e4 = [    "",       //patente: '',
              "",      //tipoVehiculo: '',
              "",      //marca: '',
              "",       //modelo: '',
              "",       //documento: '',
              "",       //nombre: '',
              "",       //apellido: '',
              100,       //valor: 100,
              ""       //horaEntrada: ''
         ]

let e5 = [    "",       //patente: '',
              "",      //tipoVehiculo: '',
              "",      //marca: '',
              "",       //modelo: '',
              "",       //documento: '',
              "",       //nombre: '',
              "",       //apellido: '',
              100,       //valor: 100,
              ""       //horaEntrada: ''
         ]

let e6 = [    "",       //patente: '',
              "",      //tipoVehiculo: '',
              "",      //marca: '',
              "",       //modelo: '',
              "",       //documento: '',
              "",       //nombre: '',
              "",       //apellido: '',
              100,       //valor: 100,
              ""       //horaEntrada: ''
         ]

let e7 = [    "",       //patente: '',
              "",      //tipoVehiculo: '',
              "",      //marca: '',
              "",       //modelo: '',
              "",       //documento: '',
              "",       //nombre: '',
              "",       //apellido: '',
              100,       //valor: 100,
              ""       //horaEntrada: ''
         ]

let e8 = [    "",       //patente: '',
              "",      //tipoVehiculo: '',
              "",      //marca: '',
              "",       //modelo: '',
              "",       //documento: '',
              "",       //nombre: '',
              "",       //apellido: '',
              100,       //valor: 100,
              ""       //horaEntrada: ''
         ]


let f1 = [    "",       //patente: '',
              "",      //tipoVehiculo: '',
              "",      //marca: '',
              "",       //modelo: '',
              "",       //documento: '',
              "",       //nombre: '',
              "",       //apellido: '',
              100,       //valor: 100,
              ""       //horaEntrada: ''
         ]

let f2 = [    "",       //patente: '',
              "",      //tipoVehiculo: '',
              "",      //marca: '',
              "",       //modelo: '',
              "",       //documento: '',
              "",       //nombre: '',
              "",       //apellido: '',
              100,       //valor: 100,
              ""       //horaEntrada: ''
         ]

let f3 = [    "",       //patente: '',
              "",      //tipoVehiculo: '',
              "",      //marca: '',
              "",       //modelo: '',
              "",       //documento: '',
              "",       //nombre: '',
              "",       //apellido: '',
              100,       //valor: 100,
              ""       //horaEntrada: ''
         ]

let f4 = [    "",       //patente: '',
              "",      //tipoVehiculo: '',
              "",      //marca: '',
              "",       //modelo: '',
              "",       //documento: '',
              "",       //nombre: '',
              "",       //apellido: '',
              100,       //valor: 100,
              ""       //horaEntrada: ''
         ]

let f5 = [    "",       //patente: '',
              "",      //tipoVehiculo: '',
              "",      //marca: '',
              "",       //modelo: '',
              "",       //documento: '',
              "",       //nombre: '',
              "",       //apellido: '',
              100,       //valor: 100,
              ""       //horaEntrada: ''
         ]

let f6 = [    "",       //patente: '',
              "",      //tipoVehiculo: '',
              "",      //marca: '',
              "",       //modelo: '',
              "",       //documento: '',
              "",       //nombre: '',
              "",       //apellido: '',
              100,       //valor: 100,
              ""       //horaEntrada: ''
         ]

let f7 = [    "",       //patente: '',
              "",      //tipoVehiculo: '',
              "",      //marca: '',
              "",       //modelo: '',
              "",       //documento: '',
              "",       //nombre: '',
              "",       //apellido: '',
              100,       //valor: 100,
              ""       //horaEntrada: ''
         ]

let f8 = [    "",       //patente: '',
              "",      //tipoVehiculo: '',
              "",      //marca: '',
              "",       //modelo: '',
              "",       //documento: '',
              "",       //nombre: '',
              "",       //apellido: '',
              100,       //valor: 100,
              ""       //horaEntrada: ''
         ]


const posiciones = [a1,a2,a3,a4,a5,a6,a7,a8,
                   b1,b2,b3,b4,b5,b6,b7,b8,
                   c1,c2,c3,c4,c5,c6,c7,c8,
                   d1,d2,d3,d4,d5,d6,d7,d8,
                   e1,e2,e3,e4,e5,e6,e7,e8,
                   f1,f2,f3,f4,f5,f6,f7,f8,
                   ]

class GRIDParking extends React.Component {
            constructor(props){
            super(props);

            this.state = {
                titulo: 'GRIDParking',
                lugares: posiciones
            }
        }

        onClearArray = () => {
            this.setState(state => {
                const lugares = state.lugares.map(lugar => lugar = '');
                return {lugares};
            });
        };

        modify = (event,lugar) => {
            event.preventDefault();
            console.log(event)
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
                    this.cargarDatos(lugar);
                    break;

                    case "verDatos":
                    this.verDatos(lugar);
                    break;

                  default:
                }
              });
        }
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


        cargarDatos = (lugar) => {
            Swal.mixin({
                input: 'text',
                confirmButtonText: 'Next &rarr;',
                showCancelButton: true,
                progressSteps: ['1', '2', '3', '4', '5','6','7','8']
            }).queue([
                'Patente',
                'TipoVehiculo',
                'Marca',
                'Modelo',
                'DocumentoPropietario',
                'NombrePropietario',
                'ApellidoPropietario',
                'horaEntrada'

            ]).then((result) => {
                if (result.value) {
                 //   this.setState({ vehiculo: result.value[0].value[0] })
                  /*  this.setState({ vehiculo: result.value[1][1]})
                    this.setState({ vehiculo: result.value[1][2]})
                    this.setState({ vehiculo: result.value[1][3]})
                    this.setState({ vehiculo: result.value[1][4]})
                    this.setState({ vehiculo: result.value[1][5]})
                    this.setState({ vehiculo: result.value[1][6]})
                    this.setState({ vehiculo: result.value[1][7]})
                    this.setState({ vehiculo: result.value[1][9]})*/

              //this.state.lugares.map((lugar, i) => {
                       //      if(this.state.index == i) {
                                //console.log(lugar)
                                //console.log(result.value[0])
                                  this.setState({ lugares: this.upDateLugar(lugar,result.value[0],0)})
                                  this.setState({ lugares: this.upDateLugar(lugar,result.value[1],1)})
                                  this.setState({ lugares: this.upDateLugar(lugar,result.value[2],2)})
                                  this.setState({ lugares: this.upDateLugar(lugar,result.value[3],3)})
                                  this.setState({ lugares: this.upDateLugar(lugar,result.value[4],4)})
                                  this.setState({ lugares: this.upDateLugar(lugar,result.value[5],5)})
                                  this.setState({ lugares: this.upDateLugar(lugar,result.value[6],6)})
                                  this.setState({ lugares: this.upDateLugar(lugar,result.value[8],8)})
                                  //this.setState({ lugares: this.upDateLugar(lugar,result.value[1],1)})
                                  this.verDatos(lugar)
                           //  }
               //});

                /*this.state.lugares.forEach(lugar => this.verDatos(lugar));

                    this.setState(state => {
                        const lugares = state.lugares.map((lugar, i) => {
                            if(this.state.index == i){
                                lugar = result.value[i];
                                return lugar;
                            }
                        });
                        return {lugares};
                    })*/
                }
            })
        }

        upDateLugar(lugar,value,i) {
           return lugar[i] = value
        }

        verDatos(lugar) {
            Swal.fire({
                title: 'Vehiculo ingresado!',
                html:
                    '<strong><u> DATOS </u></strong><br/>' +
                    '<strong> Patente: </strong>' + <script> lugar[1] </script> + '<br/>' +
                    '<strong> TipoVehiculo: </strong>' + <script> lugar[2] </script> + '<br/>' +
                    '<strong> Marca: </strong>' + <script> lugar[3] </script> +'<br/>' +
                    '<strong> Modelo: </strong>' + <script> lugar[4] </script> + '<br/>' +
                    '<strong> DocumentoPropietario: </strong>' + <script> lugar[5] </script> + '<br/>' +
                    '<strong> NombrePropietario: </strong>' + <script> lugar[6] </script> + '<br/>' +
                    '<strong> ApellidoApellido: </strong>' + <script> lugar[7] </script> + '<br/>' +
                   '<strong>  valor: </strong>' + <script> lugar[8] </script> + '<br/>' +
                    '<strong> HoraEntrada: </strong>' + <script>lugar[9] </script>,
                confirmButtonText: 'Aceptar'
            });
        }

      render() {
                  return(

                      <div className="grid">
                          {this.state.lugares.map((lugar, index) => {
                               console.log(lugar[7])

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



/*
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
                valor: 100,
                horaEntrada: 'Hora Actual'
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
                progressSteps: ['1', '2', '3', '4', '5','6','7']
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
                    this.setState({ horaEntrada: result.value[7] })

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
                    '<strong> ApellidoApellido: </strong>' + this.state.apellido + '<br/>' +
                    '<strong> HoraEntrada: </strong>' + this.state.horaEntrada,
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

          render() {
                return (
                <GridLayout className="layout" cols={12} rowHeight={30} width={1200}>
                  <div className="grid" key="a" data-grid={{x: 0, y: 0, w: 1, h: 2, minW: 2, maxW: 4, static: true}} onClick={this.modify}><button className="btn btn-dark item-grid" >Seccion-A-lugar</button></div>
                  <div className="grid" key="b" data-grid={{x: 3, y: 0, w: 3, h: 2, minW: 2, maxW: 4, static: true}} onClick={this.modify}><button className="btn btn-dark item-grid" >Seccion-A-lugar2</button></div>
                  <div className="grid" key="c" data-grid={{x: 3, y: 3, w: 1, h: 2, minW: 2, maxW: 4, static: true}} onClick={this.modify}><button className="btn btn-dark item-grid" >Seccion-A-lugar3</button></div>
                  <div className="grid" key="d" data-grid={{x: 0, y: 3, w: 1, h: 2, minW: 2, maxW: 4, static: true}} onClick={this.modify}><button className="btn btn-dark item-grid" >Seccion-A-lugar4</button></div>
                  <div className="grid" key="e" data-grid={{x: 3, y: 6, w: 1, h: 2, minW: 2, maxW: 4, static: true}} onClick={this.modify}><button className="btn btn-dark item-grid" >Seccion-A-lugar5</button></div>
                  <div className="grid" key="f" data-grid={{x: 0, y: 6, w: 1, h: 2, minW: 2, maxW: 4, static: true}} onClick={this.modify}><button className="btn btn-dark item-grid" >Seccion-A-lugar6</button></div>
                </GridLayout>
                )
             }
}*/
