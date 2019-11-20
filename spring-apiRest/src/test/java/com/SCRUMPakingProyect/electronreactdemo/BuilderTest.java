package com.SCRUMPakingProyect.electronreactdemo;

import com.SCRUMPakingProyect.ApiRest.apiRest.Dao.DataDAO;
import com.SCRUMPakingProyect.ApiRest.apiRest.Dao.HibernateDataDAOImpl;
import com.SCRUMPakingProyect.ApiRest.apiRest.Dao.VehiculoDAOImpl;
import com.SCRUMPakingProyect.ApiRest.apiRest.Service.VehiculoService;
import com.SCRUMPakingProyect.ApiRest.apiRest.Service.VehiculoServiceImpl;
import com.SCRUMPakingProyect.ApiRest.model.Vehiculo;
import com.SCRUMPakingProyect.ApiRest.runner.TransactionRunner;

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
        run(() ->
                dataDAO.clear()
                );
    }

    public Vehiculo fiatUno() {
        Vehiculo fiatUno = new Vehiculo("FIA123","Auto","FIAT UNO");
        this.vehiculoService.register(fiatUno);
        return fiatUno;
    }

    public Vehiculo fordka(){
        Vehiculo fordKa = new Vehiculo("FOR345","Auto","FORD KA");
        this.vehiculoService.register(fordKa);
        return fordKa;
    }

    public Vehiculo renaultDoce(){
        Vehiculo renaultDoce = new Vehiculo("REN456","Auto","RENAULT DOCE");
        this.vehiculoService.register(renaultDoce);
        return renaultDoce;
    }

    public Vehiculo fiatUnoRecuperado(String patente) {
        return TransactionRunner.run(() ->
                this.vehiculoService.recuperarVehiculo(patente));
    }

    public Vehiculo renaultDoceRecuperado(String patente) {
        return TransactionRunner.run(() ->
                this.vehiculoService.recuperarVehiculo(patente));
    }

    public Vehiculo fordKaRecuperado(String patente) {
        return TransactionRunner.run(() ->
                this.vehiculoService.recuperarVehiculo(patente));
    }

}
