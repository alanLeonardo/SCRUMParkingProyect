package com.SCRUMPakingProyect.ApiRest.model;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
public class Vehiculo {

    @Id
    @Column(unique=true)
    @NotBlank(message = "El nombre de pantente no puede ser vacio")
    private String patente;

    @NotBlank(message = "La marca del vehiculo no puede ser vacio")
    private String marca;

    @NotBlank(message = "El modelo del vehiculo no puede ser vacio")
    private String modelo;

    private String diaDeIngreso;

    private String horaDeIngreso;

    @NotBlank(message = "El tipo de vehiculo no puede ser vacio")
    private String tipoVehiculo;

    //@Column(unique=true)
    @NotNull(message = "El propietario no puede ser nullo")
    @ManyToOne(cascade=CascadeType.ALL, fetch = FetchType.EAGER)
    private Propietario propietario;

    @Min(0)
    private int posicion;

    @Min(0)
    private int valor;

    public Vehiculo() {}

    public Vehiculo(String marca) {
        this.marca = marca;
    }

    public Vehiculo(String patente,String tipoVehiculo, String marca) {
        this.patente = patente;
        this.tipoVehiculo = tipoVehiculo;
        this.marca = marca;
    }

    public Vehiculo(@NotBlank(message = "El nombre de pantente no puede ser vacio") String patente, @NotBlank(message = "El tipo de vehiculo no puede ser vacio") String tipoVehiculo, @NotBlank(message = "La marca del vehiculo no puede ser vacio") String marca, @NotBlank(message = "El modelo del vehiculo no puede ser vacio") String modelo, Propietario propietario, @Min(0) int posicion) {
        this.patente = patente;
        this.tipoVehiculo = tipoVehiculo;
        this.marca = marca;
        this.modelo = modelo;
        this.propietario = propietario;
        this.posicion = posicion;
    }

    public Vehiculo(@NotBlank(message = "El nombre de pantente no puede ser vacio") String patente, @NotBlank(message = "La marca del vehiculo no puede ser vacio") String marca, @NotBlank(message = "El modelo del vehiculo no puede ser vacio") String modelo, String diaDeIngreso, String horaDeIngreso, @NotBlank(message = "El tipo de vehiculo no puede ser vacio") String tipoVehiculo, @NotNull(message = "El propietario no puede ser vacio") Propietario propietario, @Min(0) int posicion, @Min(0) int valor) {
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
        this.diaDeIngreso = diaDeIngreso;
        this.horaDeIngreso = horaDeIngreso;
        this.tipoVehiculo = tipoVehiculo;
        this.propietario = propietario;
        this.posicion = posicion;
        this.valor = valor;
    }

    public Vehiculo(@NotBlank(message = "El nombre de pantente no puede ser vacio") String patente, @NotBlank(message = "La marca del vehiculo no puede ser vacio") String marca, @NotBlank(message = "El modelo del vehiculo no puede ser vacio") String modelo,  String diaDeIngreso, String horaDeIngreso, @NotNull(message = "El tipo de vehiculo no puede ser vacio") String tipoVehiculo, @NotNull(message = "El propietario no puede ser vacio") Propietario propietario, @Min(0) int posicion) {
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
        this.diaDeIngreso = diaDeIngreso;
        this.horaDeIngreso = horaDeIngreso;
        this.tipoVehiculo = tipoVehiculo;
        this.propietario = propietario;
        this.posicion = posicion;
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

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
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
        this.diaDeIngreso = diaDeIngreso;
    }

    public Propietario getPropietario() {
        return propietario;
    }

    public void setPropietario(Propietario propietario) {
        this.propietario = propietario;
    }

    public int getPosicion() {
        return posicion;
    }

    public void setPosicion(int posicion) {
        this.posicion = posicion;
    }

    public int getValor() {
        return valor;
    }

    public void setValor(int valor) {
        this.valor = valor;
    }
}
