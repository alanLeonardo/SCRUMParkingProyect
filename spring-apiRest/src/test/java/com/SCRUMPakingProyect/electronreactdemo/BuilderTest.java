package com.SCRUMPakingProyect.electronreactdemo;

import com.SCRUMPakingProyect.ApiRest.apiRest.Dao.DataDAO;
import com.SCRUMPakingProyect.ApiRest.apiRest.Dao.HibernateDataDAOImpl;
import com.SCRUMPakingProyect.ApiRest.apiRest.Dao.VehiculoDAOImpl;
import com.SCRUMPakingProyect.ApiRest.apiRest.Service.VehiculoService;
import com.SCRUMPakingProyect.ApiRest.apiRest.Service.VehiculoServiceImpl;
import com.SCRUMPakingProyect.ApiRest.model.Vehiculo;

import static com.SCRUMPakingProyect.ApiRest.runner.TransactionRunner.run;

public class BuilderTest {
    protected DataDAO dataDAO;
    protected VehiculoDAOImpl vehiculoDAO;
    protected VehiculoService vehiculoService;

    public BuilderTest(){}

    public void setUp() {
        this.dataDAO = new HibernateDataDAOImpl();
        vehiculoDAO = new VehiculoDAOImpl();
        vehiculoService = new VehiculoServiceImpl(vehiculoDAO);
    }

    public void cleanup() {
        run(() ->  dataDAO.clear());
    }

    public Vehiculo fiatUno() {
        Vehiculo fiatUno = new Vehiculo("FIAT UNO");
        this.vehiculoService.register(fiatUno);
        return fiatUno;
    }

}
