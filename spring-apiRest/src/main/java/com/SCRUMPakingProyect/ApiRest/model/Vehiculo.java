package com.SCRUMPakingProyect.ApiRest.model;

import javax.persistence.*;
import com.SCRUMPakingProyect.ApiRest.model.Propietario;

@Entity
public class Vehiculo {

    @Id
    private String patente;

    private String tipoVehiculo;

    private String nombreVehiculo;

//    @Column(unique=true)
//    private Propietario propietario;

    public Vehiculo() {}

    public Vehiculo(String nombreVehiculo) {
        this.nombreVehiculo = nombreVehiculo;
    }

    public Vehiculo(String patente,String tipoVehiculo, String nombreVehiculo) {
        this.patente = patente;
        this.tipoVehiculo = tipoVehiculo;
        this.nombreVehiculo = nombreVehiculo;
        //this.propietario = propietario;
    }

    public String getPatente() {
        return patente;
    }

    public String getNombreVehiculo() {
        return nombreVehiculo;
    }

//    public Propietario getPropietario(){
//           return this.propietario;
//    }

    @Override
    public String toString() {
        return "Vehiculo{" +
                "patente=" + patente +
                ", nombreVehiculo='" + nombreVehiculo + '\'' +
                '}';
    }
}
