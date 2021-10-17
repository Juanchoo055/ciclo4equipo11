'use strict'

var express = require('express');
var UsuarioController = require('../controllers/usuario.controller');

var api = express.Router();

api.post('/usuario', UsuarioController.crearUsuario);
api.get('/usuario', UsuarioController.obtenerUsuarios);
api.put('/usuario/:id', UsuarioController.actualizarUsuario);
api.delete('/usuario/:id', UsuarioController.eliminarUsuario);

module.exports = api;