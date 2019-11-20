package com.SCRUMPakingProyect.ApiRest.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Propietario {

        @Id
        private int documento;

        private String nombre;
        private String apellido;
        private String id;

        public Propietario() {}

        public Propietario(int documento, String nombre, String apellido) {
                this.documento = documento;
                this.nombre = nombre;
                this.apellido = apellido;
        }


}
