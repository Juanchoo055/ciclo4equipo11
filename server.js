const express = require('express');
const router = require('./network/routes');


var app = express();
app.use(express.json());
app.use(express.urlencoded({extended : false}));

// enrutador siempre al final
router(app);

app.use('/', express.static('public'));



app.listen(5000);
console.log('La aplicacion esta escuchando en http://localhost:5000')