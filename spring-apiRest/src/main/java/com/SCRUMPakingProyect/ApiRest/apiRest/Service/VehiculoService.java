package com.SCRUMPakingProyect.ApiRest.apiRest.Service;

import com.SCRUMPakingProyect.ApiRest.model.Vehiculo;

import java.util.List;

public interface VehiculoService {

    public void register(Vehiculo vehiculo);

    public List<Vehiculo> findAll();

    public Vehiculo recuperarVehiculo(String patente);

    public void retirarVehiculo(String patente);
}
