package com.SCRUMPakingProyect.electronreactdemo;

import com.SCRUMPakingProyect.ApiRest.apiRest.Dao.*;
import com.SCRUMPakingProyect.ApiRest.apiRest.Service.PropietarioService;
import com.SCRUMPakingProyect.ApiRest.apiRest.Service.PropietarioServiceImpl;
import com.SCRUMPakingProyect.ApiRest.apiRest.Service.VehiculoService;
import com.SCRUMPakingProyect.ApiRest.apiRest.Service.VehiculoServiceImpl;
import com.SCRUMPakingProyect.ApiRest.model.Propietario;
import com.SCRUMPakingProyect.ApiRest.model.Vehiculo;
import com.SCRUMPakingProyect.ApiRest.runner.TransactionRunner;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import java.util.List;

import static com.SCRUMPakingProyect.ApiRest.runner.TransactionRunner.run;

public class AceptanceTests {
    protected DataDAO dataDAO;
    protected VehiculoDAOImpl vehiculoDAO;
    protected VehiculoService vehiculoService;
    protected PropietarioDAO propietarioDAO;
    protected PropietarioService propietarioService;

    @Before
    public void setUp() {
        this.dataDAO = new HibernateDataDAOImpl();
        vehiculoDAO = new VehiculoDAOImpl();
        propietarioDAO = new PropietarioDAOImpl();
        vehiculoService = new VehiculoServiceImpl(vehiculoDAO, propietarioDAO);
        propietarioService = new PropietarioServiceImpl(propietarioDAO);
    }

    @After
    public void cleanup() {
        run(() ->
                dataDAO.clear()
        );
    }

    @Test
    public void ComoUsuarioQuieroPoderRegistrarUnVehiculoEnElSistemaYComprobarQueSeEncuentraCorrectamentePersistido(){
        Propietario cacho = new Propietario(38268688,"Cacho","Perez");
        Vehiculo fiatUno = new Vehiculo("ABC123","FIAT","UNO","Hoy","14HRS","AUTO",cacho,1);

        TransactionRunner.run(() ->
                vehiculoService.registrar(fiatUno)
        );

        Vehiculo fiatUnoRecuperado = TransactionRunner.run(() ->
                vehiculoService.recuperarVehiculo(1));

        Assert.assertEquals(fiatUno.getPatente(),fiatUnoRecuperado.getPatente());
    }

    @Test
    public void ComoUsuarioQuieroPoderIngresarHorarioYDiaDeEntradaYVisualizarQueSeEncuentraCorrectamentePersistido(){
        Propietario cacho = new Propietario(38268688,"Cacho","Perez");
        Vehiculo fiatUno = new Vehiculo("ABC123","FIAT","UNO","AUTO",cacho,1);

        fiatUno.setDiaDeIngreso("4/12/19");
        fiatUno.setHoraDeIngreso("14:00");

        TransactionRunner.run(() ->
                vehiculoService.registrar(fiatUno)
        );

        Vehiculo fiatUnoRecuperado = TransactionRunner.run(() ->
                vehiculoService.recuperarVehiculo(1));

        System.out.println(fiatUnoRecuperado.getDiaDeIngreso());
        System.out.println(fiatUnoRecuperado.getHoraDeIngreso());
    }

    @Test
    public void ComoUsuarioQuieroPoderVerTodosLosVehiculosDelEstacionamiento(){
        Propietario cacho = new Propietario(38268688,"Cacho","Perez");
        Propietario pepe = new Propietario(38268688,"Pepe","Argento");
        Propietario tato = new Propietario(38268688,"Tato","Dobien");
        Vehiculo fiatUno = new Vehiculo("ABC123","FIAT","UNO","Hoy","14HRS","AUTO",cacho,1);
        Vehiculo renaultDoce = new Vehiculo("DEF456","RENAULT","DOCE","Hoy","16HRS","AUTO",pepe,2);
        Vehiculo fordKa = new Vehiculo("GHI789","FORD","KA","3/12","13HRS","AUTO",tato,3);

        TransactionRunner.run(() ->
                vehiculoService.registrar(fiatUno)
        );

        TransactionRunner.run(() ->
                vehiculoService.registrar(renaultDoce)
        );
        TransactionRunner.run(() ->
                vehiculoService.registrar(fordKa)
        );


        List<Vehiculo> vehiculos = TransactionRunner.run(() -> vehiculoService.listarTodos());

        Assert.assertEquals(vehiculos.get(0).getPatente(), fiatUno.getPatente());
        Assert.assertEquals(vehiculos.get(1).getPatente(), renaultDoce.getPatente());
        Assert.assertEquals(vehiculos.get(2).getPatente(), fordKa.getPatente());

        System.out.println(vehiculos.get(0).getPatente());
        System.out.println(vehiculos.get(1).getPatente());
        System.out.println(vehiculos.get(2).getPatente());
    }

}
