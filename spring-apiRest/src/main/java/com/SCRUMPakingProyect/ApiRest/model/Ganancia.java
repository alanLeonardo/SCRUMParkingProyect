package com.SCRUMPakingProyect.ApiRest.model;

import javax.persistence.*;
import javax.validation.constraints.Min;
import java.util.HashSet;
import java.util.Set;


@Entity
public class Ganancia {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idGanancia;

    @ElementCollection(targetClass=Double.class)
    private Set<Double> pagos = new HashSet<Double>();

    @Min(1)
    private Double valorActual = 0.0;

    public Ganancia() {

    }

    public Ganancia(Double valorActual) {
        this.valorActual = valorActual;
    }

    public int getId() {
        return idGanancia;
    }

    public void setId(int id) {
        this.idGanancia = id;
    }

    public Set<Double> getPagos() {
        return pagos;
    }

    public void setPagos(Double pago) {
        this.pagos.add(pago);
    }

    public Double getValorActual() {
        return valorActual;
    }

    public void setValorActual(Double valorActual) {
        this.valorActual = valorActual;
    }

    public void ganaciaActual() {
         this.valorActual =  new Double(this.pagos.stream().mapToInt(p -> p.intValue()).sum());
    }
}


