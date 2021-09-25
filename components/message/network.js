const express = require('express');

// importo archivo de respuestas
const response = require('../../network/response');
const router = express.Router();



router.get('/', function (req, res){
    console.log(req.headers);
    console.log(req.query);
    console.log(req.body);
    response.success(req,res,'TD OK', 201);
});

router.post('/', function(req,res){
    if (req.body.name == "no"){
        console.log(req.body);
        response.error(req,res,'Es un error', 401,'el body decia no')
    } else{
        response.success(req,res,'Este mensaje es opcional', 200)
    }
    
    
});

router.delete('/', function(req,res){
    console.log(req.query);
    res.send('Hola desde delete');
});


module.exports = router;