import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import logo from './logo.svg';
import './CSS/principal.css';
import { withRouter } from 'react-router-dom'
import PakingSlots from "./Components/ParkingSlots.js"

class App extends Component {
    constructor(props) {
     super(props)
     this.handleListarVehiculos = this.handleListarVehiculos.bind(this);
    }

    handleListarVehiculos = event => {
        event.preventDefault();
        this.props.history.push("/ParkingSlots")
    }

 render() {
    return (
         <div className="container-fluid">
            <div className="row">
               <div className="col-4" id="menu">
                 <h1>SCRUMParking</h1>
                 <div id="img2">
                    { /*<img src={img2.jpg} alt="Logo">*/ }
                    <img src={logo} className="App-logo" alt="logo" />
                 </div>
                 <div className="form-group">
                    <button type="button" className="btn btn-outline-success">Ingresar vehiculo</button>
                    <button type="button" className="btn btn-outline-success">Retirar vehiculo</button>
                 </div>
                 <div className="form-group">
                    <button type="button" className="btn btn-outline-success" onClick={this.handleListarVehiculos}>Listar vehiculos</button>
                    <button type="button" className="btn btn-outline-success w-25">Salir</button>
                 </div>
               </div>
             </div>
         </div>
    );
  }
}

export default App;
