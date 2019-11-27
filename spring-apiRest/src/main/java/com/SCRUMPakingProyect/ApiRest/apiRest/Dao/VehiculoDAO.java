package com.SCRUMPakingProyect.ApiRest.apiRest.Dao;

import com.SCRUMPakingProyect.ApiRest.model.Vehiculo;

import java.util.List;

public interface VehiculoDAO {

    public void register(Vehiculo vehiculo);

    public List<Vehiculo> findAll();

    public Vehiculo recuperarVehiculo(String patente);

    public void retirarVehiculo(String patente);
}
