package com.SCRUMPakingProyect.ApiRest.apiRest.Service;

import com.SCRUMPakingProyect.ApiRest.apiRest.Dao.VehiculoDAO;
import com.SCRUMPakingProyect.ApiRest.model.Vehiculo;


import java.util.List;

public class VehiculoServiceImpl implements VehiculoService {

    private VehiculoDAO vehiculoDAO;


    public VehiculoServiceImpl(VehiculoDAO vehiculoDAO) {
        this.vehiculoDAO = vehiculoDAO;
    }


    @Override
        public List<Vehiculo> findAll() {
        List<Vehiculo> listVehiculos= vehiculoDAO.findAll();
        return listVehiculos;
    }

    @Override
    public void register(Vehiculo vehiculo) {
        this.vehiculoDAO.register(vehiculo);
    }

    @Override
    public Vehiculo recuperarVehiculo(String patente){
        return this.vehiculoDAO.recuperarVehiculo(patente);
    }
}
