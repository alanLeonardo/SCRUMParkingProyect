package com.SCRUMPakingProyect.electronreactdemo;

import com.SCRUMPakingProyect.ApiRest.model.Propietario;
import com.SCRUMPakingProyect.ApiRest.model.Vehiculo;
import com.SCRUMPakingProyect.ApiRest.runner.TransactionRunner;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class ElectronReactDemoApplicationTests extends BuilderTest {

//    @Before
//    public void setUp(){
//        super.setUp();
//    }
//
//    @After
//    public void cleanup(){
//        super.cleanup();
//    }
//
//	@Test
//    public void DadoUnAutoSeVerificaQueSeaUnFIATUNO() {
//        Vehiculo vehiculo = TransactionRunner.run(super::fiatUno);
//
//        Assert.assertEquals("FIAT" ,vehiculo.getMarca());
//        Assert.assertEquals("UNO" ,vehiculo.getModelo());
//        Assert.assertEquals("FIA123",vehiculo.getPatente());
//        System.out.println(vehiculo.getPatente());
//        System.out.println(vehiculo.getMarca());
//	}
//
//	@Test
//	public void GuardamosDosVehiculosYLosRecuperamos(){
//        Propietario cacho = TransactionRunner.run(this::propietarioDelFiatUno);
//        Vehiculo fiat = TransactionRunner.run(this::fiatUno);
//        Vehiculo renault = TransactionRunner.run(this::renaultDoce);
//
//        Vehiculo renaultRecuperado = super.renaultDoceRecuperado(renault.getPosicion());
//        Vehiculo fiatRecuperado = super.fiatUnoRecuperado(fiat.getPosicion());
//
//        Assert.assertEquals(fiat.getPatente(), fiatRecuperado.getPatente());
//        Assert.assertEquals(renault.getPatente(), renaultRecuperado.getPatente());
//    }
//
//    @Test
//    public void GuardamosUnFiatUnoYQueremosSaberLosDatosDelPropietario(){
//	   // Propietario cacho = TransactionRunner.run(this::propietarioDelFiatUno);
//        Vehiculo fiat = TransactionRunner.run(this::fiatUno);
//
//        Vehiculo fiatRecuperado = super.fiatUnoRecuperado(fiat.getPosicion());
//        Propietario cachoRecuperado = super.propietarioRecuperado(30456789);
//
//        Assert.assertEquals(cacho.getDocumento(),cachoRecuperado.getDocumento());
//        Assert.assertEquals(fiat.getPatente(), fiatRecuperado.getPatente());
//
//        Assert.assertEquals(fiatRecuperado.getPropietario().getDocumento(),cachoRecuperado.getDocumento());
//        Assert.assertEquals(fiatRecuperado.getPropietario().getNombre(),cachoRecuperado.getNombre());
//    }
//
//    @Test
//    public void GuardamosUnFiatUnoYLoRetiramos(){
//        Vehiculo fiatUno = new Vehiculo("FIA123", "Auto", "FIAT");
//        TransactionRunner.run(() ->
//                this.vehiculoService.retirarVehiculo(fiatUno.getPatente()));
//    }
}
