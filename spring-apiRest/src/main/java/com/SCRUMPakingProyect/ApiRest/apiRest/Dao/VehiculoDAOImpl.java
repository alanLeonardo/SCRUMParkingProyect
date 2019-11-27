package com.SCRUMPakingProyect.ApiRest.apiRest.Dao;

import com.SCRUMPakingProyect.ApiRest.model.Vehiculo;
import org.hibernate.query.Query;
import java.util.List;
import org.hibernate.Session;
import com.SCRUMPakingProyect.ApiRest.runner.TransactionRunner;


public class VehiculoDAOImpl extends HibernateDAO<Vehiculo> implements VehiculoDAO {

    public VehiculoDAOImpl() {
        super(Vehiculo.class);

    }

    @Override
    public List<Vehiculo> findAll() {
        Session session = TransactionRunner.getCurrentSession();
        String hql = "from Vehiculo";
        Query<Vehiculo> query = session.createQuery(hql, Vehiculo.class);

        return query.getResultList();

    }

    @Override
    public void register(Vehiculo vehiculo) {
        Session session = TransactionRunner.getCurrentSession();
        session.save(vehiculo);
    }

    @Override
    public Vehiculo recuperarVehiculo(String patente){
        Session session = TransactionRunner.getCurrentSession();
        String hql =  "from Vehiculo v " +
                     "WHERE patente = :laPatente";
        Query<Vehiculo> query = session.createQuery(hql, Vehiculo.class);
        query.setParameter("laPatente", patente);
        return query.getSingleResult();
    }

    @Override
    public void retirarVehiculo(String patente){
        Session session = TransactionRunner.getCurrentSession();
        Vehiculo vehiculo = recuperarVehiculo(patente);
        session.delete(vehiculo);
    }
}
