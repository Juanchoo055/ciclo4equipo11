// user controller
'use strict' 

const express = require('express')
const bodyParser = require('body-parser')
const app = express
const User = require('../models/usuario.model')
const router = require('express').Router()


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
})

module.exports = router