// user controller
'use strict'

const express = require('express')
const Usuario = require('../models/usuario.model')
const router = express.Router()
const path = require('path')
const mongoose = require('mongoose')
const { request } = require('http')

const parseId = (id) => {
    return mongoose.Types.ObjectId(id)
}


function crearUsuario(req, res) {
    var usuario = new Usuario;
    var params = req.body;

    usuario.name = params.name;
    usuario.email = params.email;
    usuario.password = params.password;
    usuario.age = params.age;

    usuario.save((error, usuarioGuardado) => {

        if (error) {
            res.status(500).send({ message: "Error al guardar el usuario" });
        } else {
            if (!usuarioGuardado) {
                res.status(404).send({ message: "El usuario no se ha podido guardar" });
            } else {
                res.status(200).send({ usuario: usuarioGuardado });
            }
        }

    })
}

function obtenerUsuarios(req, res) {
   
    Usuario.find({}, (error, usuarioObtenido) => {

        if (error) {
            res.status(500).send({ message: "Error al obtener el usuario" });
        } else {
            if (!usuarioObtenido) {
                res.status(404).send({ message: "No se ha podido obtener el usuario" });
            } else {
                res.status(200).send({ usuario: usuarioObtenido })
            }


        }
    })
}

function actualizarUsuario(req, res) {
    const id = req.params.id;
    var usuarioActualizar = req.body;

    Usuario.updateOne({ _id: parseId(id)}, usuarioActualizar, (error, usuarioActualizado) => {
        if (error) {
            res.status(500).send({ message: "Error al actualizar el usuario" });
        } else {
            if (!usuarioActualizado) {
                res.status(404).send({ message: "No se ha podido actualizar el usuario" });
            } else {
                res.status(200).send({ message: "Usuario Actualizado" })
            }
        }
    })
}

function eliminarUsuario(req, res) {
    const id = req.params.id;
    Usuario.deleteOne( {_id: parseId(id)}, (error, eliminarUsuario) => {
        if (error) {
            res.status(500).send({ message: "Error al eliminar el usuario" });
        } else {
            if (!eliminarUsuario) {
                res.status(404).send({ message: "No se ha podido eliminar el usuario" });
            } else {
                res.status(200).send({ message: `Usuario con id ${id} ha sido eliminado` })
            }
        }
    })
}


/* 
router.route('/').get((req, res) => {
    // using .find() without a paramter will match on all user instances
    User.find()
        .then(allUsers => res.json(allUsers))
        .catch(err => res.status(400).json('Error! ' + err))
})

router.route('/new').post((req, res) => {
    const newUser = new User(req.body)
    newUser.save()
        .then(user => res.status(200).json(user))
        .catch(err => res.status(400).json("Error! " + err))
})

router.route('/delete:email').delete((req, res) => {
    User.deleteOne({ _email: req.params.email })
        .then(success => res.json('Success! User deleted.'))
        .catch(err => res.status(400).json('Error! ' + err))
})

router.route('/update:_id').put((req, res) => {
    User.findByIdAndUpdate(req.params._id, {$set:req.body})
        .then(user => res.json('Success! User updated.'))
        .catch(err => res.status(400).json('Error! ' + err))
}) */

/* module.exports = router */

module.exports = {
    crearUsuario,
    obtenerUsuarios,
    actualizarUsuario,
    eliminarUsuario,
}