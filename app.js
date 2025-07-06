
//importaciones 
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const path = require('path');
const app = express();
require('dotenv').config();

//configuracion de puerto
const PORT = process.env.port || 3000;

//midlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//database conexion 
const mysql = require('mysql2');

app.get('/',(req,res)=>{
    res.send('pmv operativo');
});

const rutasUsuario = require('./routes/usuario.routes.js');
app.use('/api/usuarios',rutasUsuario);

app.listen(PORT,()=>{
    console.log(`servidor en ${PORT}`)
});