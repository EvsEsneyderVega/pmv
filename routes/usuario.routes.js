const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Obtener conexión a la base de datos desde app
const db = require('../config/db'); // Asumiendo que centralizas conexión, si no, te explico cómo pasarlo

// Ruta: Login usuario
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Datos incompletos' });
    }

    const sql = 'SELECT * FROM usuarios WHERE username = ? LIMIT 1';
    
    db.query(sql, [username], (err, results) => {
        if (err) return res.status(500).json({ error: 'Error en la base de datos' });
        
        if (results.length === 0) {
            return res.status(401).json({ error: 'Usuario no encontrado' });
        }

        const usuario = results[0];

        // Validar contraseña
        bcrypt.compare(password, usuario.password, (err, match) => {
            if (err) return res.status(500).json({ error: 'Error al verificar contraseña' });
            
            if (!match) {
                return res.status(401).json({ error: 'Contraseña incorrecta' });
            }

            // Generar token
            const token = jwt.sign(
                { id: usuario.id, nivel: usuario.nivel },
                process.env.JWT_SECRET,
                { expiresIn: '4h' }
            );

            return res.json({ token, nivel: usuario.nivel });
        });
    });
});

module.exports = router;
