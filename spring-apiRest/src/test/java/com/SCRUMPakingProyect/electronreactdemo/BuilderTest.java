package com.SCRUMPakingProyect.electronreactdemo;

import com.SCRUMPakingProyect.ApiRest.apiRest.Dao.*;
import com.SCRUMPakingProyect.ApiRest.apiRest.Service.PropietarioService;
import com.SCRUMPakingProyect.ApiRest.apiRest.Service.PropietarioServiceImpl;
import com.SCRUMPakingProyect.ApiRest.apiRest.Service.VehiculoService;
import com.SCRUMPakingProyect.ApiRest.apiRest.Service.VehiculoServiceImpl;
import com.SCRUMPakingProyect.ApiRest.model.Propietario;
import com.SCRUMPakingProyect.ApiRest.model.Vehiculo;
import com.SCRUMPakingProyect.ApiRest.runner.TransactionRunner;
import com.fasterxml.jackson.databind.annotation.JsonAppend;
import org.apache.tomcat.jni.Local;
import sun.util.calendar.BaseCalendar;
import sun.util.calendar.LocalGregorianCalendar;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;

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
        propietarioDAO = new PropietarioDAOImpl();
        vehiculoService = new VehiculoServiceImpl(vehiculoDAO, propietarioDAO);
        propietarioService = new PropietarioServiceImpl(propietarioDAO);
    }

    public void cleanup() {
//        run(() ->
//                dataDAO.clear()
//                );
    }

    public Propietario propietarioDelFiatUno() {
        Propietario propietarioDelFiatUno = new Propietario(30456789,"Cacho","Try");
        this.propietarioDAO.registrar(propietarioDelFiatUno);
        return propietarioDelFiatUno;
    }

    public Propietario cacho = new Propietario(30456789, "Cacho", "Try");

    public Vehiculo fiatUno() {
        Vehiculo fiatUno = new Vehiculo("FIA123","FIAT","FIAT UNO" ,"30/11/2019","14:00","Auto",cacho,1);
        //fiatUno.setDiaDeIngreso("HOY");
        //fiatUno.setHoraDeIngreso(LocalTime.now().toString());
        this.vehiculoService.registrar(fiatUno);
        return fiatUno;
    }

    public Vehiculo fiatUnoSinPropietario(){
        Vehiculo fiatUno = new Vehiculo("FIA123", "Auto", "FIAT UNO");
        this.vehiculoService.registrar(fiatUno);
        return fiatUno;
    }

    public Vehiculo fordka(){
        Vehiculo fordKa = new Vehiculo("FOR345","Auto","FORD KA");
        this.vehiculoService.registrar(fordKa);
        return fordKa;
    }

    public Vehiculo renaultDoce(){
        Vehiculo renaultDoce = new Vehiculo("REN456","Auto","RENAULT", "DOCE",cacho,2);
        renaultDoce.setDiaDeIngreso("HOY");
        renaultDoce.setHoraDeIngreso(LocalTime.now().toString());
        this.vehiculoService.registrar(renaultDoce);
        return renaultDoce;
    }

    public Vehiculo fiatUnoRecuperado(Integer posicion) {
        return TransactionRunner.run(() ->
                this.vehiculoService.recuperarVehiculo(posicion));
    }

    public Propietario propietarioRecuperado(int documento) {
        return TransactionRunner.run(() ->
                this.propietarioService.recuperarPropietario(documento));
    }

    public Vehiculo renaultDoceRecuperado(Integer posicion) {
        return TransactionRunner.run(() ->
                this.vehiculoService.recuperarVehiculo(posicion));
    }

    public Vehiculo fordKaRecuperado(Integer posicion) {
        return TransactionRunner.run(() ->
                this.vehiculoService.recuperarVehiculo(posicion));
    }

}
