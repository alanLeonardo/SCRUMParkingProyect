package com.SCRUMPakingProyect.ApiRest.model;

import javax.persistence.*;

@Entity
public class Vehiculo {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name="nombreVehiculo")
    private String nombreVehiculo;

    public Vehiculo() {}

    public Vehiculo(String nombreVehiculo) {
        this.nombreVehiculo = nombreVehiculo;
    }

    public Vehiculo(int id, String nombreVehiculo) {
        this.id = id;
        this.nombreVehiculo = nombreVehiculo;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombreVehiculo() {
        return nombreVehiculo;
    }

    public void setNombreVehiculo(String nombreVehiculo) {
        this.nombreVehiculo = nombreVehiculo;
    }

    @Override
    public String toString() {
        return "Vehiculo{" +
                "id=" + id +
                ", nombreVehiculo='" + nombreVehiculo + '\'' +
                '}';
    }
}
