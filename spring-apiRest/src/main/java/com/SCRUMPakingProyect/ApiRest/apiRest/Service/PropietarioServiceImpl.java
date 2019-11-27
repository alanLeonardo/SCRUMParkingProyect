package com.SCRUMPakingProyect.ApiRest.apiRest.Service;

import com.SCRUMPakingProyect.ApiRest.apiRest.Dao.PropietarioDAO;
import com.SCRUMPakingProyect.ApiRest.model.Propietario;

import java.util.List;

public class PropietarioServiceImpl implements PropietarioService {

    private PropietarioDAO propietarioDAO;

    public PropietarioServiceImpl(PropietarioDAO propietarioDAO) {
        this.propietarioDAO = propietarioDAO;
    }

    @Override
    public void register(Propietario propietario) {
        this.propietarioDAO.register(propietario);
    }

    @Override
    public List<Propietario> findAll() {
        List<Propietario> listPropietarios= propietarioDAO.findAll();
        return listPropietarios;
    }

    @Override
    public Propietario recuperarPropietario(int documento) {
        return this.propietarioDAO.recuperarPropietario(documento);
    }
}
