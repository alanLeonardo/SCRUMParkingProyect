package com.SCRUMPakingProyect.ApiRest.apiRest.Service;

import com.SCRUMPakingProyect.ApiRest.apiRest.Dao.PropietarioDAO;
import com.SCRUMPakingProyect.ApiRest.apiRest.Dao.VehiculoDAO;
import com.SCRUMPakingProyect.ApiRest.model.Propietario;
import com.SCRUMPakingProyect.ApiRest.model.Vehiculo;


import java.util.List;

public class VehiculoServiceImpl implements VehiculoService {

    private VehiculoDAO vehiculoDAO;
    private PropietarioDAO propietarioDAO;


    public VehiculoServiceImpl(VehiculoDAO vehiculoDAO, PropietarioDAO propietarioDAO) {
        this.vehiculoDAO = vehiculoDAO;
        this.propietarioDAO = propietarioDAO;
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
    public void registerVehiculoAndPropietario(Vehiculo vehiculo, Propietario propietario) {
        this.propietarioDAO.register(propietario);
        this.vehiculoDAO.register(vehiculo);
    }

    @Override
    public Vehiculo recuperarVehiculo(String patente){
        return this.vehiculoDAO.recuperarVehiculo(patente);
    }

    @Override
    public void retirarVehiculo(String patente){
        Vehiculo vehiculo = this.recuperarVehiculo(patente);
        //imprimirTicket();
        //calculoDeIngresos();
        this.vehiculoDAO.retirarVehiculo(patente);

    }
}
