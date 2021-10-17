// user controller
const User = require('../models/usuario.model')
const router = require('express').Router()

router.route('/new').post((req, res) => {
    const newUser = new User(req.body)
    newUser.save()
        .then(user => res.status(200).json(user))
        .catch(err => res.status(400).json("Error! " + err))
})

router.route('/').get((req, res) => {
    // using .find() without a paramter will match on all user instances
    User.find()
        .then(allUsers => res.json(allUsers))
        .catch(err => res.status(400).json('Error! ' + err))
})

router.route('/:id').get((req, res) => {
    // using .find() without a paramter will match on all user instances
    User.findById(req.params.id, req.body)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error! ' + err))
})

router.route('/delete/:id').delete((req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(success => res.json('Success! User deleted.'))
        .catch(err => res.status(400).json('Error! ' + err))
})

// router.put('/:id', async (req,res)=> {
//     const {name, email, password, age} = req.body;
//     const updateUser = {name, email, password, age};
//     await User.findByIdAndUpdate(req.params.id, updateUser)
//     res.json({status: 'Usuario Actualizado'})
// })


router.route('/update/:id').put((req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body)
        .then(user => res.json('Success! User updated.'))
        .catch(err => res.status(400).json('Error! ' + err))
})

module.exports = router