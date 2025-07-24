/*const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Obtener conexión a la base de datos desde app
const db = require('../config/db'); // Asumiendo que centralizas conexión, si no, te explico cómo pasarlo

// Ruta: Login usuario
router.post('/login', (req, res) => {
    const { nick_usr, clav_usr } = req.body;

    if (!nick_usr || !clav_usr || clav_usr.trim()=="" || nick_usr.trim()=="") {
        return res.status(400).json({ error: 'Datos incompletos' });
    }

    const sql = 'SELECT * FROM usuario WHERE nick_usr = ? LIMIT 1';
    
    db.query(sql, [nick_usr], (err, results) => {
        if (err) return res.status(500).json({ queryError: err.message });
        
        if (results.length === 0) {
            return res.status(401).json({ error1: 'Datos erroneos' });
        }
        const usuario = results[0];
        // Validar contraseña

        bcrypt.compare(clav_usr, usuario.CLAV_USR, (err, match) => {
            if (err) return res.status(500).json({ error2: err.message });
            
            if (!match) {
                return res.status(401).json({ error3: 'Contraseña incorrecta' });
            }

            // Generar token
            const token = jwt.sign(
                { id: usuario.ID_USR, nivel: usuario.ID_NIVUSR },
                process.env.JWT_SECRET,
                { expiresIn: '2h' }
            );

            return res.json({ token, nivel: usuario.ID_NIVUSR });
        });
    });
});

module.exports = router;*/

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../config/db');

// Ruta: Login
router.post('/login', (req, res) => {
    const { nick_usr, clav_usr } = req.body;

    if (!nick_usr || !clav_usr) {
        return res.status(400).json({ error: 'Datos incompletos' });
    }

    const sql = 'SELECT * FROM usuario WHERE nick_usr = ? LIMIT 1';

    db.query(sql, [nick_usr], (err, results) => {
        if (err) return res.status(500).json({ error: 'Error BD', detalle: err.message });
        if (results.length === 0) return res.status(401).json({ error: 'Datos' });

        const usuario = results[0];

        bcrypt.compare(clav_usr, usuario.CLAV_USR, (err, match) => {
            if (err) return res.status(500).json({ error: 'Interno' });
            if (!match) return res.status(401).json({ error: 'Datos' });

            const token = jwt.sign(
                { id: usuario.ID_USR, nivel: usuario.ID_NIVUSR },
                process.env.JWT_SECRET,
                { expiresIn: '2h' }
            );

            res.json({ token, nivel: usuario.ID_NIVUSR,id:usuario.ID_USR });
        });
    });
});

module.exports = router;

