const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  age: { type: Number, min: 18 }
});

const usuario = mongoose.model('usuario', usuarioSchema)
module.exports = usuario
