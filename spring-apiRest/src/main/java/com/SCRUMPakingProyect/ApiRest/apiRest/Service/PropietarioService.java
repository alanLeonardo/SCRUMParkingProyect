package com.SCRUMPakingProyect.ApiRest.apiRest.Service;

import com.SCRUMPakingProyect.ApiRest.model.Propietario;

import java.util.List;

public interface PropietarioService {

    public void register(Propietario propietario);

    public List<Propietario> findAll();

    public Propietario recuperarPropietario(int documento);
}
