const express = require('express')
const mongoose = require('mongoose')
const User = require('./db_models/user')
require('dotenv').config()
const cors = require('cors')

mongoose.connect(process.env.MONGO_URL, { useUnifiedTopology: true, useNewUrlParser: true })
  .catch(err => console.log(err))

const connection = mongoose.connection
connection.once('open', () => {console.log('Connnection succesful!')})

const app = express()
const port = 5000

const jsonParser = express.json()

const corsConfig = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}
app.use(cors(corsConfig))

app.get('/', (req, res) => res.send('home'))
app.listen(port, () => console.log('Listening'))

app.post('/registration', jsonParser, (req, res) => {
  console.log(req.body)
  const user = new User({
    email: req.body.email,
    password: req.body.password
  })

  if (User.findOne({ email: req.body.email }).exec()) {
    res.send('There\'s a user already registered with this email!')
  } else {
    user.save()
      .then(user => res.send('User is registered succesfully!'))
      .catch(err => res.status(400).send('Unable to create user!'))
  }
})
