package com.SCRUMPakingProyect.ApiRest.model;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;


@Entity
public class Propietario {

        @Id
        @NotNull(message = "El numero de documento no puede ser vacio")
        private int documento;

        @NotNull(message = "El nombre no puede ser vacio")
        private String nombre;
        @NotNull(message = "El apellido no puede ser vacio")
        private String apellido;
       /* @NotNull(message = "El nombre de pantente no puede ser vacio")
        private String id;
*/

        public Propietario() {}

        public Propietario(int documento, String nombre, String apellido) {
                this.documento = documento;
                this.nombre = nombre;
                this.apellido = apellido;
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
}
