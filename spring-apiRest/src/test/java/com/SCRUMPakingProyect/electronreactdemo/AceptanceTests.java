package com.SCRUMPakingProyect.electronreactdemo;

import com.SCRUMPakingProyect.ApiRest.apiRest.Dao.*;
import com.SCRUMPakingProyect.ApiRest.apiRest.Service.*;
import com.SCRUMPakingProyect.ApiRest.model.Ganancia;
import com.SCRUMPakingProyect.ApiRest.model.Propietario;
import com.SCRUMPakingProyect.ApiRest.model.Vehiculo;
import com.SCRUMPakingProyect.ApiRest.runner.TransactionRunner;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;

import static com.SCRUMPakingProyect.ApiRest.runner.TransactionRunner.run;

public class AceptanceTests {
    protected DataDAO dataDAO;
    protected VehiculoDAOImpl vehiculoDAO;
    protected VehiculoService vehiculoService;
    protected PropietarioDAO propietarioDAO;
    protected PropietarioService propietarioService;
    protected GananciaDAO gananciaDAO;
    protected GananciaService gananciaService;

    @Before
    public void setUp() {
        this.dataDAO = new HibernateDataDAOImpl();
        this.vehiculoDAO = new VehiculoDAOImpl();
        this.propietarioDAO = new PropietarioDAOImpl();
        this.vehiculoService = new VehiculoServiceImpl(vehiculoDAO, propietarioDAO);
        this.propietarioService = new PropietarioServiceImpl(propietarioDAO);
        this.gananciaService = new GananciaServiceImpl(gananciaDAO);
        this.vehiculoService = new VehiculoServiceImpl(vehiculoDAO, propietarioDAO);
    }

    @After
    public void cleanup() {
        run(() ->
                dataDAO.clear()
        );
    }
/*
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
*/

//test para crear la estructura de la base de datos
    public Propietario propietarioDelFiatUno() {
       Propietario propietarioDelFiatUno = new Propietario(30456789,"Cacho","Try");
        this.propietarioDAO.registrar(propietarioDelFiatUno);
        return propietarioDelFiatUno;
    }

    public Propietario cacho = new Propietario(30456789, "Cacho", "Try");

    public Vehiculo fiatUno() {
        Date d = new Date();
        Calendar c = new GregorianCalendar();
        c.setTime(d);
        Vehiculo fiatUno = new Vehiculo("FIA123","FIAT","FIAT UNO" ,c,"Auto",cacho,1);
        this.vehiculoService.registrar(fiatUno);
        return fiatUno;
    }

    public Ganancia ganaciaActual() {
        Ganancia ganancia = new Ganancia(new Double(100));
        this.gananciaService.guardar(ganancia);
        return ganancia;
    }

    public Vehiculo fiatUnoRecuperado(Integer posicion) {
        return TransactionRunner.run(() ->
                this.vehiculoService.recuperarVehiculo(posicion));
    }

    public Propietario propietarioRecuperado(int documento) {
        return TransactionRunner.run(() ->
                this.propietarioService.recuperarPropietario(documento));
    }


}
