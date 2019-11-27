package com.SCRUMPakingProyect.ApiRest.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
public class Vehiculo {

    @Id
    @NotNull(message = "El nombre de pantente no puede ser vacio")
    private String patente;

    @NotNull(message = "El tipo de vehiculo no puede ser vacio")
    private String tipoVehiculo;

    @NotNull(message = "El nombre del vehiculo no puede ser vacio")
    private String nombreVehiculo;

    @NotNull(message = "El dia de ingreso no puede ser vacio")
    private String diaDeIngreso;

    @NotNull(message = "La hora de ingreso no puede ser vacio")
    private String horaDeIngreso;

    @NotNull(message = "El propietario no puede ser vacio")
    //@Column(unique=true)
    @ManyToOne(cascade=CascadeType.ALL, fetch = FetchType.EAGER)
    private Propietario propietario;

    public Vehiculo() {}

    public Vehiculo(String nombreVehiculo) {
        this.nombreVehiculo = nombreVehiculo;
    }

    public Vehiculo(String patente,String tipoVehiculo, String nombreVehiculo) {
        this.patente = patente;
        this.tipoVehiculo = tipoVehiculo;
        this.nombreVehiculo = nombreVehiculo;
    }

    public Vehiculo(String patente,String tipoVehiculo, String nombreVehiculo,Propietario propietario) {
        this.patente = patente;
        this.tipoVehiculo = tipoVehiculo;
        this.nombreVehiculo = nombreVehiculo;
        this.propietario = propietario;
    }

    public String getPatente() {
        return patente;
    }

    public void setPatente(String patente) {
        this.patente = patente;
    }

    public String getTipoVehiculo() {
        return tipoVehiculo;
    }

    public void setTipoVehiculo(String tipoVehiculo) {
        this.tipoVehiculo = tipoVehiculo;
    }

    public String getNombreVehiculo() {
        return nombreVehiculo;
    }

    public void setNombreVehiculo(String nombreVehiculo) {
        this.nombreVehiculo = nombreVehiculo;
    }

    public String getHoraDeIngreso(){
        return this.horaDeIngreso;
    }

    public void setHoraDeIngreso(String horaDeIngreso){
        this.horaDeIngreso = horaDeIngreso;
    }

    public String getDiaDeIngreso(){
        return this.diaDeIngreso;
    }

    public void setDiaDeIngreso(String diaDeIngreso){
        this.horaDeIngreso = diaDeIngreso;
    }

    public Propietario getPropietario() {
        return propietario;
    }

    public void setPropietario(Propietario propietario) {
        this.propietario = propietario;
    }

    @Override
    public String toString() {
        return "Vehiculo{" +
                "patente='" + patente + '\'' +
                ", tipoVehiculo='" + tipoVehiculo + '\'' +
                ", nombreVehiculo='" + nombreVehiculo + '\'' +
                ", propietario=" + propietario +
                '}';
    }
}
