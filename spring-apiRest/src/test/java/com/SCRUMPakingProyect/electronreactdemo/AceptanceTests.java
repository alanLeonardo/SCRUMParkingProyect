package com.SCRUMPakingProyect.electronreactdemo;

import com.SCRUMPakingProyect.ApiRest.apiRest.Dao.*;
import com.SCRUMPakingProyect.ApiRest.apiRest.Service.*;
import com.SCRUMPakingProyect.ApiRest.model.Ganancia;
import com.SCRUMPakingProyect.ApiRest.model.Propietario;
import com.SCRUMPakingProyect.ApiRest.model.Vehiculo;
import com.SCRUMPakingProyect.ApiRest.runner.TransactionRunner;
import org.junit.*;

import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;

import static com.SCRUMPakingProyect.ApiRest.runner.TransactionRunner.run;

public class AceptanceTests {

    protected DataDAO dataDAO;
    protected VehiculoDAOImpl vehiculoDAO;
    protected GananciaDAO gananciaDAO;
    protected GananciaService gananciaService;
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
        Vehiculo fiatUno = new Vehiculo("ABC123","FIAT","UNO",getHoraYFechaActual(),"AUTO",cacho,1);

        TransactionRunner.run(() ->
                vehiculoService.registrar(fiatUno)
        );

        Vehiculo fiatUnoRecuperado = TransactionRunner.run(() ->
                vehiculoService.recuperarVehiculo(1)
        );

        Assert.assertEquals(fiatUno.getPatente(),fiatUnoRecuperado.getPatente());
    }

    @Test
    public void ComoUsuarioQuieroPoderIngresarHorarioYDiaDeEntradaYVisualizarQueSeEncuentraCorrectamentePersistido(){
        Propietario cacho = new Propietario(38268688,"Cacho","Perez");
        Vehiculo fiatUno = new Vehiculo("ABC123","FIAT","UNO",getHoraYFechaActual(),"AUTO",cacho,1);

        TransactionRunner.run(() ->
                vehiculoService.registrar(fiatUno)
        );

        Vehiculo fiatUnoRecuperado = TransactionRunner.run(() ->
                vehiculoService.recuperarVehiculo(1));

        System.out.println("EL DIA Y LA HORA DE INGRESO FUE:");
        System.out.println(fiatUnoRecuperado.getHoraYdiaDeIngreso().getTime());
    }

    @Test
    public void ComoUsuarioQuieroPoderVerTodosLosVehiculosDelEstacionamiento(){
        Propietario cacho = new Propietario(38268688,"Cacho","Perez");
        Propietario pepe = new Propietario(38268688,"Pepe","Argento");
        Propietario tato = new Propietario(38268688,"Tato","Dobien");
        Vehiculo fiatUno = new Vehiculo("ABC123","FIAT","UNO",getHoraYFechaActual(),"AUTO",cacho,1);
        Vehiculo renaultDoce = new Vehiculo("DEF456","RENAULT","DOCE",getHoraYFechaActual(),"AUTO",pepe,2);
        Vehiculo fordKa = new Vehiculo("GHI789","FORD","KA",getHoraYFechaActual(),"AUTO",tato,3);

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


    @Test
    public void ComoUsuarioQuieroPoderBuscarUnVehiculoPorSuNumeroDePatente(){

        Propietario cacho = new Propietario(38268688, "Cacho", "Perez");
        Vehiculo fiatUno = new Vehiculo("ABC123", "FIAT", "UNO", getHoraYFechaActual(), "AUTO", cacho, 1);

        TransactionRunner.run(() ->
                vehiculoService.registrar(fiatUno)
        );

        Vehiculo fiatRecuperado = TransactionRunner.run(() ->
                vehiculoService.recuperarVehiculoPorPatente(fiatUno.getPatente())
        );

        Assert.assertEquals(fiatUno.getPatente(), fiatRecuperado.getPatente());
    }

    @Test
    public void ComoUsuarioQuieroPoderRegistrarLoCobradoAUnPropietario(){
        Propietario cacho = new Propietario(38268688, "Cacho", "Perez");
        Vehiculo fiatUno = new Vehiculo("ABC123", "FIAT", "UNO", getHoraYFechaActual(), "AUTO", cacho, 1);

        TransactionRunner.run(() ->
                vehiculoService.registrar(fiatUno)
        );


    }

    private Double cantidadDeHoras(Vehiculo vehiculo, Calendar c, Double valor) {
        int cantidadDeHorasActual = c.get(Calendar.HOUR_OF_DAY) - vehiculo.getHoraYdiaDeIngreso().get(Calendar.HOUR_OF_DAY);
        if(cantidadDeHorasActual == 0) {
            return new Double(valor);
        }
        return new Double(cantidadDeHorasActual * valor);
    }

    private Calendar getHoraYFechaActual() {
        Date d = new Date();
        Calendar c = new GregorianCalendar();
        c.setTime(d);
        return c;
    }


}
