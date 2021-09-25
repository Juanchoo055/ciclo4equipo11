const express = require('express');
const router = express.Router();



var app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));




app.use('/',express.static('public'))

app.listen(5000);
console.log('La aplicacion esta escuchando en http://localhost:3000')