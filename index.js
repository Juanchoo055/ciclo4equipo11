// establish an express app
const express = require('express')
const app = express()

// allow requests from outside resources like postman, or your frontend if you choose to build that out
const cors = require('cors')
app.use(cors())

// app will serve and receive data in a JSON format
app.use(express.json())

// the messenger between our app and our database
const mongoose = require('mongoose')

// allow us to hide our connection secret in the process.env object
require('dotenv').config()

const source = process.env.ATLAS_CONNECTION
const PORT = process.env.PORT || 5000

// establish connection & give yourself a message so you know when its complete
mongoose.connect(source, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const connection = mongoose.connection
connection.once('open', () => {
  console.log("DB connected");
})

// Import and user routes
const userRoutes = require('./src/controllers/user.controller')

// Set route path on project
app.get('/', async (req, res) => {
  res.status(200).json("App is running rigth now!")
})

app.use('/users', userRoutes)

app.listen(PORT, ()=>{
    console.log(`Successfully served on port: ${PORT}.`);
})
