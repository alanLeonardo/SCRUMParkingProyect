package com.SCRUMPakingProyect.ApiRest.apiRest.Dao;

import com.SCRUMPakingProyect.ApiRest.model.Propietario;

import java.util.List;

public interface PropietarioDAO {

    public void register(Propietario propietario);

    public List<Propietario> findAll();

    public Propietario recuperarPropietario(int documento);
}
