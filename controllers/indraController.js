const getSoapClient = require('./indra_soap_cient');

async function getInfoVehiculo(placa, extranjero = 'N') {
  const client = await getSoapClient();

  return new Promise((resolve, reject) => {
    client.getInfoVehiculo({ placa, extranjero }, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
}

module.exports = { getInfoVehiculo };
