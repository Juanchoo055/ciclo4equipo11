'use strict'
 
// Cargamos el módulo de express para poder crear rutas
var express = require('express');
 
// Cargamos el controlador
var usuarioController = require('../controllers/usuario.controller');
 
// Llamamos al router
var api = express.Router();
 
// Creamos las rutas
api.get('/', usuarioController.get);
api.delete('/delete:email', usuarioController.delete);
api.post('/new', usuarioController.post);

 
// Exportamos la configuración
module.exports = api;
