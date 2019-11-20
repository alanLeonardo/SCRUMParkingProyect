package com.SCRUMPakingProyect.electronreactdemo;

import com.SCRUMPakingProyect.ApiRest.apiRest.Dao.*;
import com.SCRUMPakingProyect.ApiRest.apiRest.Service.PropietarioService;
import com.SCRUMPakingProyect.ApiRest.apiRest.Service.PropietarioServiceImpl;
import com.SCRUMPakingProyect.ApiRest.apiRest.Service.VehiculoService;
import com.SCRUMPakingProyect.ApiRest.apiRest.Service.VehiculoServiceImpl;
import com.SCRUMPakingProyect.ApiRest.model.Propietario;
import com.SCRUMPakingProyect.ApiRest.model.Vehiculo;
import com.SCRUMPakingProyect.ApiRest.runner.TransactionRunner;

import static com.SCRUMPakingProyect.ApiRest.runner.TransactionRunner.run;

public class BuilderTest {
    protected DataDAO dataDAO;
    protected VehiculoDAOImpl vehiculoDAO;
    protected VehiculoService vehiculoService;
    protected PropietarioDAO propietarioDAO;
    protected PropietarioService propietarioService;

    public BuilderTest(){}

    public void setUp() {
        this.dataDAO = new HibernateDataDAOImpl();
        vehiculoDAO = new VehiculoDAOImpl();
        vehiculoService = new VehiculoServiceImpl(vehiculoDAO);
        propietarioDAO = new PropietarioDAOImpl();
        propietarioService = new PropietarioServiceImpl(propietarioDAO);
    }

    public void cleanup() {
        run(() ->
                dataDAO.clear()
                );
    }

    public Propietario propietarioDelFiatUno() {
        Propietario propietarioDelFiatUno = new Propietario(30456789,"Cacho","Try");
        this.propietarioDAO.register(propietarioDelFiatUno);
        return propietarioDelFiatUno;
    }

    public Vehiculo fiatUno() {
        Vehiculo fiatUno = new Vehiculo("FIA123","Auto","FIAT UNO",propietarioDelFiatUnoRecuperado(30456789));
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

    public Propietario propietarioDelFiatUnoRecuperado(int documento) {
        return TransactionRunner.run(() ->
                this.propietarioService.recuperarPropietario(documento));
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
