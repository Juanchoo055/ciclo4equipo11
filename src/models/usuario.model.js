'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique:true },
  password: { type: String, required: true },
  age: { type: Number, min: 18 }
},
{
  versionKey: false,
  timestamps: true,
});

const usuario = mongoose.model('usuario', usuarioSchema)
module.exports = usuario
