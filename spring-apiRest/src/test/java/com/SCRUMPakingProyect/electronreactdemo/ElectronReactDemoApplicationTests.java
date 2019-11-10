package com.SCRUMPakingProyect.electronreactdemo;

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
        Vehiculo vehiculo = TransactionRunner.run(() -> this.fiatUno());

        Assert.assertEquals("FIAT UNO",vehiculo.getNombreVehiculo());
	}

}
