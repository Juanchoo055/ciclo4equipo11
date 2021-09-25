var assert = require('assert');
var expect = require('chai').expect

var User = require('../src/models/user.model');

describe('#userModel test their validations', function(){

  it('Should be invalid if name is empty', function( done ){
    var user1 = new User({
      email: 'prueba@prueba.com',
      password: '123456789',
      age: 20
    })

    user1.validate(function(err){
      expect( err.errors.name ).to.exist;
      done();
    })
  });

  it('Should be a invalid validation ', function( done ){
    var user2 = new User({
      name: 'Juan Jaramillo',
      email: 'prueba@prueba.com',
      password: '123456789',
      age: 15
    })

    user2.validate(function(err){
      expect( err.errors.age ).to.exist;
      done();
    })
  });

})