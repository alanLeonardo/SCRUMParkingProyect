package com.SCRUMPakingProyect.ApiRest.Controller;

import com.SCRUMPakingProyect.ApiRest.apiRest.Dao.PropietarioDAOImpl;
import com.SCRUMPakingProyect.ApiRest.apiRest.Dao.VehiculoDAOImpl;
import com.SCRUMPakingProyect.ApiRest.apiRest.Service.PropietarioService;
import com.SCRUMPakingProyect.ApiRest.apiRest.Service.PropietarioServiceImpl;
import com.SCRUMPakingProyect.ApiRest.apiRest.Service.VehiculoService;
import com.SCRUMPakingProyect.ApiRest.apiRest.Service.VehiculoServiceImpl;
import com.SCRUMPakingProyect.ApiRest.model.Vehiculo;
import com.SCRUMPakingProyect.ApiRest.runner.TransactionRunner;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

//Indiciamos que es un controlador rest
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
//@RequestMapping("/api") //esta sera la raiz de la url, es decir http://127.0.0.1:8080/api/
public class VehiculoRestController {

    private VehiculoService vehiculoService = new VehiculoServiceImpl(new VehiculoDAOImpl(),new PropietarioDAOImpl());

    @GetMapping("/vehiculo/{patente}")
    public Vehiculo vehiculo(@PathVariable String patente) {
           return TransactionRunner.run(() -> vehiculoService.recuperarVehiculo(patente));
    }

    /*Este método se hará cuando por una petición GET (como indica la anotación) se llame a la url
    http://8080/api/vehiculos*/
    @GetMapping("/vehiculos")
    public List<Vehiculo> vehiculos() {
        //retornará todos los vehiculos
        return TransactionRunner.run(() -> {
            List<Vehiculo> vehiculos = new ArrayList<Vehiculo>();
            vehiculos = vehiculoService.listarTodos();
            return vehiculos;
        });
    }

    @PostMapping("/vehiculoIngresado")
    public void ingresarVehiculo(@Valid @RequestBody Vehiculo vehiculo) {
        vehiculo.setDiaDeIngreso(LocalDate.now().toString());
        vehiculo.setHoraDeIngreso(new SimpleDateFormat("HH:mm:ss").format(new Date()));
        vehiculo.setValor(100);
        TransactionRunner.run(() ->
            vehiculoService.registrarVehiculoYPropietario(vehiculo,vehiculo.getPropietario()));
    }

    @DeleteMapping("/vehiculo/{patente}")
    public void retirarVehiculo(@PathVariable String patente) {
            TransactionRunner.run(() -> vehiculoService.retirarVehiculo(patente));
    }

    @GetMapping("/error")
    public String getError(){
        throw new RuntimeException("Exception .. hay un problema");
    }
}
