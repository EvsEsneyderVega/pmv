const express = require('express');
const router = express.Router();
const { getInfoVehiculo } = require('../controllers/indraController');

router.post('/consultar-vehiculo', async (req, res) => {
  const { placa, extranjero } = req.body;

  try {
    const respuesta = await getInfoVehiculo(placa, extranjero || 'N');
    res.json(respuesta);
    console.log(respuesta)
  } catch (err) {
    console.error('Error consultando vehículo:', err);
    res.status(500).json({ error: 'Error al consultar el vehículo' });
  }

});

module.exports = router;
