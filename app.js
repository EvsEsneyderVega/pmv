
//importaciones 
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const app = express();
const path = require('path');
const verificarToken = require('./middlewares/verificarToken');

require('dotenv').config();

//configuracion de puerto
const PORT = process.env.PORT || 3000;

//midlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//database conexion 
const mysql = require('mysql2');

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','login.html'));
});

// Vista para usuario Ingreso (nivel 1)
app.get('/vista/ingreso', verificarToken, (req, res) => {
    if (req.usuario.nivel != 1) {
        return res.status(403).send('Acceso denegado');
    }
    res.sendFile(path.join(__dirname, 'views', 'ingreso.html'));
});

// Vista para Calidad (nivel 2)
app.get('/vista/calidad', verificarToken, (req, res) => {
    if (req.usuario.nivel != 2) {
        return res.status(403).send('Acceso denegado');
    }
    res.sendFile(path.join(__dirname, 'views', 'calidad.html'));
});

// Vista para Admin (nivel 3)
app.get('/vista/admin', verificarToken, (req, res) => {
    if (req.usuario.nivel != 3) {
        return res.status(403).send('Acceso denegado');
    }
    res.sendFile(path.join(__dirname, 'views', 'admin.html'));
});


const rutasUsuario = require('./routes/usuario.routes.js');
app.use('/api/usuarios',rutasUsuario);

app.listen(PORT,()=>{
    console.log(`servidor en ${PORT}`)
});