import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.timeout = 20000; // 20s
axios.defaults.headers.post['Content-Type'] = 'application/json';

const crearVehiculo = ({patente,tipoVehiculo,marca,modelo,
                       documento,nombre,apellido,posicion}) => {
  return axios.post('/vehiculos', {
      patente: patente,
      tipoVehiculo: tipoVehiculo,
      marca: marca,
      modelo: modelo,
      propietario: {
                  documento: documento,
                  nombre: nombre,
                  apellido: apellido
                  },
      posicion: posicion
     })
  .then(response => {
    return Promise.resolve(response);
  })
  .catch(error => {
    return Promise.reject(error.response.data);
  });
}

const getVehiculo = (patente) => {
    return axios.get(`/vehiculo/${patente}`)
    .then(response => {
      return Promise.resolve(response);
    })
    .catch(error => {
      return Promise.reject(error.response.data);
    })
}

const getVehiculos = () => {
    return axios.get(`/vehiculos`)
    .then(response => {
      return Promise.resolve(response);
    })
    .catch(error => {
      return Promise.reject(error.response.data);
    })
}

export {crearVehiculo,getVehiculos}