/** invocacion de la libreria */
const soap = require('soap');
require('dotenv').config();

const url = process.env.INDRA_URL;

/**crear cliente */
soap.createClient(url,(err,client)=>{

    if(err) return console.log('Error',err);

    // 1. setConexion
  client.setConexion({ cadena: 'cadena_de_conexion' }, (err, res) => {
    if (err) console.error('setConexion Error:', err);
    else console.log('setConexion Response:', res);
  });

  // 2. EnviarEventosSicov
  client.EnviarEventosSicov({ cadena: '<xml_eventos>' }, (err, res) => {
    if (err) console.error('EnviarEventosSicov Error:', err);
    else console.log('EnviarEventosSicov Response:', res);
  });

  // 3. EnviarFurSicov
  client.EnviarFurSicov({ cadena: '<xml_fur>' }, (err, res) => {
    if (err) console.error('EnviarFurSicov Error:', err);
    else console.log('EnviarFurSicov Response:', res);
  });

  // 4. getInfoVehiculo
  client.getInfoVehiculo(data, (err, res) => {
    if (err) console.error('getInfoVehiculo Error:', err);
    else console.log('getInfoVehiculo Response:', res);
  });

  // 5. getInfoPin
  client.getInfoPin({
    placa: 'ABC123',
    codigoRunt: '1234567890',
    fecha: '2025-07-19'
  }, (err, res) => {
    if (err) console.error('getInfoPin Error:', err);
    else console.log('getInfoPin Response:', res);
  });

  // 6. EnviarRuntSicov
  client.EnviarRuntSicov({
    nombreEmpleado: 'Juan Pérez',
    numeroIdentificacion: '12345678',
    placa: 'ABC123',
    extranjero: '0',
    consecutivoRUNT: '999999999',
    IdRunt: 'ABCDEF123',
    direccionIpEquipo: '192.168.10.100'
  }, (err, res) => {
    if (err) console.error('EnviarRuntSicov Error:', err);
    else console.log('EnviarRuntSicov Response:', res);
  });

});