package com.SCRUMPakingProyect.ApiRest.apiRest.Service;

import com.SCRUMPakingProyect.ApiRest.model.Propietario;
import com.SCRUMPakingProyect.ApiRest.model.Vehiculo;

import java.util.List;

public interface VehiculoService {

    public void register(Vehiculo vehiculo);

    public void registerVehiculoAndPropietario(Vehiculo vehiculo, Propietario propietario);

    public List<Vehiculo> findAll();

    public Vehiculo recuperarVehiculo(String patente);

    public void delete(String patente);
}
