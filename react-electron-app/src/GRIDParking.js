import React from 'react';
import './CSS/GRIDParking.css';
import Swal from 'sweetalert2';
import swal from 'sweetalert';
import {Link} from 'react-router-dom';
import GridLayout from 'react-grid-layout';
import GRIDMaterial from './GRIDMaterial';
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

let a1 = new Map();
a1.set("patente", "xcm");
a1.set("tipoVehiculo", "");
a1.set("marca", "");
a1.set("modelo", "");
a1.set("documento", "");
a1.set("nombre", "");
a1.set("apellido", "");
a1.set("valor", 100);
a1.set("horaEntrada", 100);

let a2 = new Map();
a2.set("patente", "xcm");
a2.set("tipoVehiculo", "");
a2.set("marca", "");
a2.set("modelo", "");
a2.set("documento", "");
a2.set("nombre", "");
a2.set("apellido", "");
a2.set("valor", 100);
a2.set("horaEntrada", 100);

let a3 = new Map();
a3.set("patente", "");
a3.set("tipoVehiculo", "");
a3.set("marca", "");
a3.set("modelo", "");
a3.set("documento", "");
a3.set("nombre", "");
a3.set("apellido", "");
a3.set("valor", 100);
a3.set("horaEntrada", 100);

let a4 = new Map();
a4.set("patente", "");
a4.set("tipoVehiculo", "");
a4.set("marca", "");
a4.set("modelo", "");
a4.set("documento", "");
a4.set("nombre", "");
a4.set("apellido", "");
a4.set("valor", 100);
a4.set("horaEntrada", 100);

let a5 = new Map();
a5.set("patente", "xcm");
a5.set("tipoVehiculo", "");
a5.set("marca", "");
a5.set("modelo", "");
a5.set("documento", "");
a5.set("nombre", "");
a5.set("apellido", "");
a5.set("valor", 100);
a5.set("horaEntrada", 100);

let a6 = new Map();
a6.set("patente", "");
a6.set("tipoVehiculo", "");
a6.set("marca", "");
a6.set("modelo", "");
a6.set("documento", "");
a6.set("nombre", "");
a6.set("apellido", "");
a6.set("valor", 100);
a6.set("horaEntrada", 100);

let a7 = new Map();
a7.set("patente", "xcm");
a7.set("tipoVehiculo", "");
a7.set("marca", "");
a7.set("modelo", "");
a7.set("documento", "");
a7.set("nombre", "");
a7.set("apellido", "");
a7.set("valor", 100);
a7.set("horaEntrada", 100);

let a8 = new Map();
a8.set("patente", "xcm");
a8.set("tipoVehiculo", "");
a8.set("marca", "");
a8.set("modelo", "");
a8.set("documento", "");
a8.set("nombre", "");
a8.set("apellido", "");
a8.set("valor", 100);
a8.set("horaEntrada", 100);

let b1 = new Map();
b1.set("patente", "xcm");
b1.set("tipoVehiculo", "");
b1.set("marca", "");
b1.set("modelo", "");
b1.set("documento", "");
b1.set("nombre", "");
b1.set("apellido", "");
b1.set("valor", 100);
b1.set("horaEntrada", 100);

let b2 = new Map();
b2.set("patente", "xcm");
b2.set("tipoVehiculo", "");
b2.set("marca", "");
b2.set("modelo", "");
b2.set("documento", "");
b2.set("nombre", "");
b2.set("apellido", "");
b2.set("valor", 100);
b2.set("horaEntrada", 100);

let b3 = new Map();
b3.set("patente", "xcm");
b3.set("tipoVehiculo", "");
b3.set("marca", "");
b3.set("modelo", "");
b3.set("documento", "");
b3.set("nombre", "");
b3.set("apellido", "");
b3.set("valor", 100);
b3.set("horaEntrada", 100);

let b4 = new Map();
b4.set("patente", "xcm");
b4.set("tipoVehiculo", "");
b4.set("marca", "");
b4.set("modelo", "");
b4.set("documento", "");
b4.set("nombre", "");
b4.set("apellido", "");
b4.set("valor", 100);
b4.set("horaEntrada", 100);

let b5 = new Map();
b5.set("patente", "xcm");
b5.set("tipoVehiculo", "");
b5.set("marca", "");
b5.set("modelo", "");
b5.set("documento", "");
b5.set("nombre", "");
b5.set("apellido", "");
b5.set("valor", 100);
b5.set("horaEntrada", 100);

let b6 = new Map();
b6.set("patente", "xcm");
b6.set("tipoVehiculo", "");
b6.set("marca", "");
b6.set("modelo", "");
b6.set("documento", "");
b6.set("nombre", "");
b6.set("apellido", "");
b6.set("valor", 100);
b6.set("horaEntrada", 100);

let b7 = new Map();
b7.set("patente", "xcm");
b7.set("tipoVehiculo", "");
b7.set("marca", "");
b7.set("modelo", "");
b7.set("documento", "");
b7.set("nombre", "");
b7.set("apellido", "");
b7.set("valor", 100);
b7.set("horaEntrada", 100);


let b8 = new Map();
b8.set("patente", "xcm");
b8.set("tipoVehiculo", "");
b8.set("marca", "");
b8.set("modelo", "");
b8.set("documento", "");
b8.set("nombre", "");
b8.set("apellido", "");
b8.set("valor", 100);
b8.set("horaEntrada", 100);

let c1 = new Map();
c1.set("patente", "");
c1.set("tipoVehiculo", "");
c1.set("marca", "");
c1.set("modelo", "");
c1.set("documento", "");
c1.set("nombre", "");
c1.set("apellido", "");
c1.set("valor", 100);
c1.set("horaEntrada", 100);

let c2 = new Map();
c2.set("patente", "xcm");
c2.set("tipoVehiculo", "");
c2.set("marca", "");
c2.set("modelo", "");
c2.set("documento", "");
c2.set("nombre", "");
c2.set("apellido", "");
c2.set("valor", 100);
c2.set("horaEntrada", 100);

let c3 = new Map();
c3.set("patente", "xcm");
c3.set("tipoVehiculo", "");
c3.set("marca", "");
c3.set("modelo", "");
c3.set("documento", "");
c3.set("nombre", "");
c3.set("apellido", "");
c3.set("valor", 100);
c3.set("horaEntrada", 100);

let c4 = new Map();
c4.set("patente", "xcm");
c4.set("tipoVehiculo", "");
c4.set("marca", "");
c4.set("modelo", "");
c4.set("documento", "");
c4.set("nombre", "");
c4.set("apellido", "");
c4.set("valor", 100);
c4.set("horaEntrada", 100);

let c5 = new Map();
c5.set("patente", "xcm");
c5.set("tipoVehiculo", "");
c5.set("marca", "");
c5.set("modelo", "");
c5.set("documento", "");
c5.set("nombre", "");
c5.set("apellido", "");
c5.set("valor", 100);
c5.set("horaEntrada", 100);

let c6 = new Map();
c6.set("patente", "xcm");
c6.set("tipoVehiculo", "");
c6.set("marca", "");
c6.set("modelo", "");
c6.set("documento", "");
c6.set("nombre", "");
c6.set("apellido", "");
c6.set("valor", 100);
c6.set("horaEntrada", 100);

let c7 = new Map();
c7.set("patente", "xcm");
c7.set("tipoVehiculo", "");
c7.set("marca", "");
c7.set("modelo", "");
c7.set("documento", "");
c7.set("nombre", "");
c7.set("apellido", "");
c7.set("valor", 100);
c7.set("horaEntrada", 100);

let c8 = new Map();
c8.set("patente", "xcm");
c8.set("tipoVehiculo", "");
c8.set("marca", "");
c8.set("modelo", "");
c8.set("documento", "");
c8.set("nombre", "");
c8.set("apellido", "");
c8.set("valor", 100);
c8.set("horaEntrada", 100);

let d1 = new Map();
d1.set("patente", "");
d1.set("tipoVehiculo", "");
d1.set("marca", "");
d1.set("modelo", "");
d1.set("documento", "");
d1.set("nombre", "");
d1.set("apellido", "");
d1.set("valor", 100);
d1.set("horaEntrada", 100);

let d2 = new Map();
d2.set("patente", "");
d2.set("tipoVehiculo", "");
d2.set("marca", "");
d2.set("modelo", "");
d2.set("documento", "");
d2.set("nombre", "");
d2.set("apellido", "");
d2.set("valor", 100);
d2.set("horaEntrada", 100);

let d3 = new Map();
d3.set("patente", "");
d3.set("tipoVehiculo", "");
d3.set("marca", "");
d3.set("modelo", "");
d3.set("documento", "");
d3.set("nombre", "");
d3.set("apellido", "");
d3.set("valor", 100);
d3.set("horaEntrada", 100);

let d4 = new Map();
d4.set("patente", "xcm");
d4.set("tipoVehiculo", "");
d4.set("marca", "");
d4.set("modelo", "");
d4.set("documento", "");
d4.set("nombre", "");
d4.set("apellido", "");
d4.set("valor", 100);
d4.set("horaEntrada", 100);

let d5 = new Map();
d5.set("patente", "xcm");
d5.set("tipoVehiculo", "");
d5.set("marca", "");
d5.set("modelo", "");
d5.set("documento", "");
d5.set("nombre", "");
d5.set("apellido", "");
d5.set("valor", 100);
d5.set("horaEntrada", 100);


let d6 = new Map();
d6.set("patente", "xcm");
d6.set("tipoVehiculo", "");
d6.set("marca", "");
d6.set("modelo", "");
d6.set("documento", "");
d6.set("nombre", "");
d6.set("apellido", "");
d6.set("valor", 100);
d6.set("horaEntrada", 100);

let d7 = new Map();
d7.set("patente", "xcm");
d7.set("tipoVehiculo", "");
d7.set("marca", "");
d7.set("modelo", "");
d7.set("documento", "");
d7.set("nombre", "");
d7.set("apellido", "");
d7.set("valor", 100);
d7.set("horaEntrada", 100);

let d8 = new Map();
d8.set("patente", "xcm");
d8.set("tipoVehiculo", "");
d8.set("marca", "");
d8.set("modelo", "");
d8.set("documento", "");
d8.set("nombre", "");
d8.set("apellido", "");
d8.set("valor", 100);
d8.set("horaEntrada", 100);

let e1 = new Map();
e1.set("patente", "xcm");
e1.set("tipoVehiculo", "");
e1.set("marca", "");
e1.set("modelo", "");
e1.set("documento", "");
e1.set("nombre", "");
e1.set("apellido", "");
e1.set("valor", 100);
e1.set("horaEntrada", 100);

let e2 = new Map();
e2.set("patente", "xcm");
e2.set("tipoVehiculo", "");
e2.set("marca", "");
e2.set("modelo", "");
e2.set("documento", "");
e2.set("nombre", "");
e2.set("apellido", "");
e2.set("valor", 100);
e2.set("horaEntrada", 100);

let e3 = new Map();
e3.set("patente", "xcm");
e3.set("tipoVehiculo", "");
e3.set("marca", "");
e3.set("modelo", "");
e3.set("documento", "");
e3.set("nombre", "");
e3.set("apellido", "");
e3.set("valor", 100);
e3.set("horaEntrada", 100);

let e4 = new Map();
e4.set("patente", "xcm");
e4.set("tipoVehiculo", "");
e4.set("marca", "");
e4.set("modelo", "");
e4.set("documento", "");
e4.set("nombre", "");
e4.set("apellido", "");
e4.set("valor", 100);
e4.set("horaEntrada", 100);

let e5 = new Map();
e5.set("patente", "xcm");
e5.set("tipoVehiculo", "");
e5.set("marca", "");
e5.set("modelo", "");
e5.set("documento", "");
e5.set("nombre", "");
e5.set("apellido", "");
e5.set("valor", 100);
e5.set("horaEntrada", 100);

let e6 = new Map();
e6.set("patente", "xcm");
e6.set("tipoVehiculo", "");
e6.set("marca", "");
e6.set("modelo", "");
e6.set("documento", "");
e6.set("nombre", "");
e6.set("apellido", "");
e6.set("valor", 100);
e6.set("horaEntrada", 100);

let e7 = new Map();
e7.set("patente", "xcm");
e7.set("tipoVehiculo", "");
e7.set("marca", "");
e7.set("modelo", "");
e7.set("documento", "");
e7.set("nombre", "");
e7.set("apellido", "");
e7.set("valor", 100);
e7.set("horaEntrada", 100);

let e8 = new Map();
e8.set("patente", "xcm");
e8.set("tipoVehiculo", "");
e8.set("marca", "");
e8.set("modelo", "");
e8.set("documento", "");
e8.set("nombre", "");
e8.set("apellido", "");
e8.set("valor", 100);
e8.set("horaEntrada", 100);

let f1 = new Map();
f1.set("patente", "xcm");
f1.set("tipoVehiculo", "");
f1.set("marca", "");
f1.set("modelo", "");
f1.set("documento", "");
f1.set("nombre", "");
f1.set("apellido", "");
f1.set("valor", 100);
f1.set("horaEntrada", 100);

let f2 = new Map();
f2.set("patente", "xcm");
f2.set("tipoVehiculo", "");
f2.set("marca", "");
f2.set("modelo", "");
f2.set("documento", "");
f2.set("nombre", "");
f2.set("apellido", "");
f2.set("valor", 100);
f2.set("horaEntrada", 100);

let f3 = new Map();
f3.set("patente", "xcm");
f3.set("tipoVehiculo", "");
f3.set("marca", "");
f3.set("modelo", "");
f3.set("documento", "");
f3.set("nombre", "");
f3.set("apellido", "");
f3.set("valor", 100);
f3.set("horaEntrada", 100);

let f4 = new Map();
f4.set("patente", "xcm");
f4.set("tipoVehiculo", "");
f4.set("marca", "");
f4.set("modelo", "");
f4.set("documento", "");
f4.set("nombre", "");
f4.set("apellido", "");
f4.set("valor", 100);
f4.set("horaEntrada", 100);

let f5 = new Map();
f5.set("patente", "xcm");
f5.set("tipoVehiculo", "");
f5.set("marca", "");
f5.set("modelo", "");
f5.set("documento", "");
f5.set("nombre", "");
f5.set("apellido", "");
f5.set("valor", 100);
f5.set("horaEntrada", 100);

let f6 = new Map();
f6.set("patente", "xcm");
f6.set("tipoVehiculo", "");
f6.set("marca", "");
f6.set("modelo", "");
f6.set("documento", "");
f6.set("nombre", "");
f6.set("apellido", "");
f6.set("valor", 100);
f6.set("horaEntrada", 100);

let f7 = new Map();
f7.set("patente", "xcm");
f7.set("tipoVehiculo", "");
f7.set("marca", "");
f7.set("modelo", "");
f7.set("documento", "");
f7.set("nombre", "");
f7.set("apellido", "");
f7.set("valor", 100);
f7.set("horaEntrada", 100);

let f8 = new Map();
f8.set("patente", "xcm");
f8.set("tipoVehiculo", "");
f8.set("marca", "");
f8.set("modelo", "");
f8.set("documento", "");
f8.set("nombre", "");
f8.set("apellido", "");
f8.set("valor", 100);
f8.set("horaEntrada", 100);

const posiciones = [a1,a2,a3,a4,a5,a6,a7,a8,
                   b1,b2,b3,b4,b5,b6,b7,b8,
                   c1,c2,c3,c4,c5,c6,c7,c8,
                   d1,d2,d3,d4,d5,d6,d7,d8,
                   e1,e2,e3,e4,e5,e6,e7,e8,
                   f1,f2,f3,f4,f5,f6,f7,f8
                   ]

class GRIDParking extends React.Component {
            constructor(props){
            super(props);

            this.state = {
                titulo: 'GRIDParking',
                lugares: posiciones,
                i: 0,
                lugarActual: ''
            }
        }

        onClearArray = () => {
            this.setState(state => {
                const lugares = state.lugares.map(lugar => lugar.set("patente", "")
                                                           .set("tipoVehiculo","" )
                                                           .set("marca", "")
                                                           .set("modelo", "")
                                                           .set("documento","")
                                                           .set("nombre", "")
                                                           .set("apellido", "")
                                                           .set("valor", "")
                                                           .set("horaEntrada",""))
                return {lugares};
            });
        };

  // componentDidMount(lugar) {
     //  this.gridParking(lugar)
      // this.onClearArray()
  // }

     modify = (event) => {
       event.preventDefault();
       this.handleLugar(event);
       
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

            })
         }

        cargarDatos = () => {
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
                    this.setState(state => {
                        const lugares = state.lugares.map((lugar, index) => {
                            if(this.state.i == index) {
                            lugar.set("patente", result.value[0])
                            .set("tipoVehiculo", result.value[1])
                            .set("marca", result.value[2])
                            .set("modelo", result.value[3])
                            .set("documento", result.value[4])
                            .set("nombre", result.value[5])
                            .set("apellido", result.value[6])
                            .set("valor", result.value[7])
                            .set("horaEntrada", result.value[8])
                            }
                        })
                        // return {lugares};
                    })
                     this.verDatos()
                 }
            });
        }
        verDatos = () => {
            this.state.lugares.map((lugar, index) => {
                if(this.state.i == index) {
                    this.setState({lugarActual: lugar});
                }
            });

            Swal.fire({
                title: 'Vehiculo ingresado!',
                html:
                    '<strong><u> DATOS </u></strong><br/>' +
                    '<strong> Patente: </strong>' +   this.state.lugarActual.get("patente")  + '<br/>' +
                    '<strong> TipoVehiculo: </strong>' +  this.state.lugarActual.get("tipoVehiculo")  + '<br/>' +
                    '<strong> Marca: </strong>' + this.state.lugarActual.get("marca") +'<br/>' +
                    '<strong> Modelo: </strong>' +  this.state.lugarActual.get("modelo")  + '<br/>' +
                    '<strong> DocumentoPropietario: </strong>' +  this.state.lugarActual.get("documento")  + '<br/>' +
                    '<strong> NombrePropietario: </strong>' +  this.state.lugarActual.get("nombre") + '<br/>' +
                    '<strong> ApellidoApellido: </strong>' +  this.state.lugarActual.get("apellido")  + '<br/>' +
                   '<strong>  valor: </strong>' +  this.state.lugarActual.get("valor") + '<br/>' +
                    '<strong> HoraEntrada: </strong>' + this.state.lugarActual.get("horaEntrada") ,
                confirmButtonText: 'Aceptar'
            });
        }

    handleLugar(event) {
        this.setState({i: event.target.value});
    }

     render() {
         return (
        //    <GridLayout className="layout" cols={12} rowHeight={30} width={1200}>
        //      {this.state.lugares.map((lugar, index) => {
        //          const posY = index > 7 ? index+1 : index;
        //             return (
        //                 <div key={index} data-grid={{x: index, y: index+1, w: 5, h: 4, minW: 2, maxW: 4, static: true}}>
        //                     <button className="btn btn-dark item-grid" value={index} onClick={this.modify} >{ lugar.get("patente")}</button>
        //                 </div>
        //             )
        //         })}
        //      <div  key="4"  data-grid={{x: 3, y: 3, w: 5, h: 4, minW: 2, maxW: 4, static: true}}>
        //          <button type="btn btn-dark item-grid" onClick={this.onClearArray}>  Desocupar parcelas  </button>
        //      </div>
        //    </GridLayout>
        <GRIDMaterial lugares={this.state.lugares} modify={this.modify}/>
         )
    }
}

export default GRIDParking;

/*
render() {
                  return(
                      <div className="grid">
                          {  this.state.lugares.map((lugar, index) => {
                         return (<button className="btn btn-dark item-grid" value={index} onClick={this.modify} data-index={index} key={index}>{ lugar.get("patente") index }</button>);
                             })
                           }

                          <div className="clearArray">
                              <button type="button" onClick={this.onClearArray}>
                                  Desocupar parcelas
                              </button>
                              <Link to="/"> Home </Link>
                          </div>
                      </div>
                  )
              }

componentDidMount() {
       this.gridParking()
       this.onClearArray()
   }


   gridParking() {
        this.state.lugares.map((lugar, index) => {
             console.log(lugar);
             console.log(lugar.get("patente"));
              this.cargarDatos(lugar);
              this.verDatos(lugar);

        return <div className="grid"> <button className="btn btn-dark item-grid" value={lugar} onChange={this.handleLugar} onClick={this.modify} data-index={index} key={index}>{lugar.get("patente")}</button></div>;
     });

   }

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
        }

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
                    this.setState({ vehiculo: result.value[1][1]})
                    this.setState({ vehiculo: result.value[1][2]})
                    this.setState({ vehiculo: result.value[1][3]})
                    this.setState({ vehiculo: result.value[1][4]})
                    this.setState({ vehiculo: result.value[1][5]})
                    this.setState({ vehiculo: result.value[1][6]})
                    this.setState({ vehiculo: result.value[1][7]})
                    this.setState({ vehiculo: result.value[1][9]})

              //this.state.lugares.map((lugar, i) => {


                                console.log(this.state.lugar)
                                //console.log(result.value[0])
                                  lugar.set("patente", result.value[0])
                                  lugar.set("tipoVehiculo", result.value[1])
                                  lugar.set("marca", result.value[2])
                                  lugar.set("modelo", result.value[3])
                                  lugar.set("documento", result.value[4])
                                  lugar.set("nombre", result.value[5])
                                  lugar.set("apellido", result.value[6])
                                  lugar.set("horaEntrada", result.value[8])
                                  //this.setState({ lugares: this.upDateLugar(lugar,result.value[1],1)})
                                  this.verDatos();

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
                    })
                }
            });
        }

        verDatos = (lugar) => {
            Swal.fire({
                title: 'Vehiculo ingresado!',
                html:
                    '<strong><u> DATOS </u></strong><br/>' +
                    '<strong> Patente: </strong>' +   this.state.lugar.get("patente")  + '<br/>' +
                    '<strong> TipoVehiculo: </strong>' +  this.state.lugar.get("tipoVehiculo")  + '<br/>' +
                    '<strong> Marca: </strong>' + this.state.lugar.get("marca") +'<br/>' +
                    '<strong> Modelo: </strong>' +  this.state.lugar.get("modelo")  + '<br/>' +
                    '<strong> DocumentoPropietario: </strong>' +  this.state.lugar.get("documento")  + '<br/>' +
                    '<strong> NombrePropietario: </strong>' +  this.state.lugar.get("nombre") + '<br/>' +
                    '<strong> ApellidoApellido: </strong>' +  this.state.lugar.get("apellido")  + '<br/>' +
                   '<strong>  valor: </strong>' +  this.state.lugar.get("valor") + '<br/>' +
                    '<strong> HoraEntrada: </strong>' + this.state.lugar.get("horaEntrada") ,
                confirmButtonText: 'Aceptar'
            });
        }
*/

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
