package com.SCRUMPakingProyect.electronreactdemo;

import com.SCRUMPakingProyect.ApiRest.model.Propietario;
import com.SCRUMPakingProyect.ApiRest.model.Vehiculo;
import com.SCRUMPakingProyect.ApiRest.runner.TransactionRunner;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class ElectronReactDemoApplicationTests extends BuilderTest {

    @Before
    public void setUp(){
        super.setUp();
    }

    @After
    public void cleanup(){
        super.cleanup();
    }

	@Test
    public void DadoUnAutoSeVerificaQueSeaUnFIATUNO() {
        Vehiculo vehiculo = TransactionRunner.run(() ->
                super.fiatUno());

        Assert.assertEquals("FIAT UNO",vehiculo.getNombreVehiculo());
        Assert.assertEquals("FIA123",vehiculo.getPatente());
        System.out.println(vehiculo.getPatente());
        System.out.println(vehiculo.getNombreVehiculo());
	}

	@Test
	public void GuardamosDosVehiculosYLosRecuperamos(){
        Vehiculo fiat = TransactionRunner.run(this::fiatUno);
        Vehiculo renault = TransactionRunner.run(this::renaultDoce);

        Vehiculo renaultRecuperado = super.renaultDoceRecuperado(renault.getPatente());
        Vehiculo fiatRecuperado = super.fiatUnoRecuperado(fiat.getPatente());

        Assert.assertEquals(fiat.getPatente(), fiatRecuperado.getPatente());
        Assert.assertEquals(renault.getPatente(), renaultRecuperado.getPatente());
    }

    @Test
    public void GuardamosUnFiatUnoYQueremosSaberLosDatosDelPropietario(){
        Propietario cacho = TransactionRunner.run(this::propietarioDelFiatUno);
        Vehiculo fiat = TransactionRunner.run(this::fiatUno);

        Propietario cachoRecuperado = super.propietarioDelFiatUnoRecuperado(cacho.getDocumento());
        Vehiculo fiatRecuperado = super.fiatUnoRecuperado(fiat.getPatente());

        Assert.assertEquals(cacho.getDocumento(),cachoRecuperado.getDocumento());
        Assert.assertEquals(fiat.getPatente(), fiatRecuperado.getPatente());

        Assert.assertEquals(fiatRecuperado.getPropietario().getDocumento(),cachoRecuperado.getDocumento());
        Assert.assertEquals(fiatRecuperado.getPropietario().getNombre(),cachoRecuperado.getNombre());
    }

}
