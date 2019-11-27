package com.SCRUMPakingProyect.ApiRest.model;


import javax.persistence.*;
import javax.validation.constraints.NotNull;


@Entity
public class Propietario {

        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        private int id;

        @Column(unique = true)
        @NotNull(message = "El numero de documento no puede ser vacio")
        private int documento;

        @NotNull(message = "El nombre no puede ser vacio")
        private String nombre;
        @NotNull(message = "El apellido no puede ser vacio")
        private String apellido;


        public Propietario() {}

        public Propietario(@NotNull(message = "El numero de documento no puede ser vacio") int documento, @NotNull(message = "El nombre no puede ser vacio") String nombre, @NotNull(message = "El apellido no puede ser vacio") String apellido) {
           this.documento = documento;
           this.nombre = nombre;
           this.apellido = apellido;
        }

        public Propietario(int id, @NotNull(message = "El numero de documento no puede ser vacio") int documento, @NotNull(message = "El nombre no puede ser vacio") String nombre, @NotNull(message = "El apellido no puede ser vacio") String apellido) {
                this.id = id;
                this.documento = documento;
                this.nombre = nombre;
                this.apellido = apellido;
        }

        public int getId() {
                return id;
        }

        public void setId(int id) {
                this.id = id;
        }

        public int getDocumento() {
                return documento;
        }

        public void setDocumento(int documento) {
                this.documento = documento;
        }

        public String getNombre() {
                return nombre;
        }

        public void setNombre(String nombre) {
                this.nombre = nombre;
        }

        public String getApellido() {
                return apellido;
        }

        public void setApellido(String apellido) {
                this.apellido = apellido;
        }

    @Override
    public String toString() {
        return "Propietario{" +
                "documento=" + documento +
                ", nombre='" + nombre + '\'' +
                ", apellido='" + apellido + '\'' +
                '}';
    }
}
