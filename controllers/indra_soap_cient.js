const soap = require('soap');
require('dotenv').config();

let soapClient = null;

async function getSoapClient() {
  if (soapClient) return soapClient; // ya inicializado

  return new Promise((resolve, reject) => {
    soap.createClient(process.env.INDRA_URL, (err, client) => {
      if (err) return reject(err);
      soapClient = client;
      resolve(client);
    });
  });
}

module.exports = getSoapClient;
