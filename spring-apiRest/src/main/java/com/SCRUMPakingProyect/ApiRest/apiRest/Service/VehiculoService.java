package com.SCRUMPakingProyect.ApiRest.apiRest.Service;

import com.SCRUMPakingProyect.ApiRest.model.Propietario;
import com.SCRUMPakingProyect.ApiRest.model.Vehiculo;

import java.util.List;

public interface VehiculoService {

    public void registrar(Vehiculo vehiculo);

    public void registrarVehiculoYPropietario(Vehiculo vehiculo, Propietario propietario);

    public List<Vehiculo> listarTodos();

    public Vehiculo recuperarVehiculo(Integer posicion);

    public void retirarVehiculo(Integer posicion);
}
