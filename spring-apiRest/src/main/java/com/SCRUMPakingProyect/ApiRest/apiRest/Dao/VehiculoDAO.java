package com.SCRUMPakingProyect.ApiRest.apiRest.Dao;

import com.SCRUMPakingProyect.ApiRest.model.Vehiculo;

import java.util.List;

public interface VehiculoDAO {

    public void registrar(Vehiculo vehiculo);

    public List<Vehiculo> listarTodos();

    public Vehiculo recuperarVehiculo(String patente);

    public Vehiculo recuperarVehiculoPorPosicion(int posicion);

    public void retirarVehiculo(int posicion);
}
