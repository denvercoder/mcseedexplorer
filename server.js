const express = require('express')
const cors = require('cors')
const path = require('path')

const mongoose = require('mongoose')

require('dotenv').config()

const app = express()

app.use(express.static(path.join(__dirname, 'client/build')))

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI

mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
})

const connection = mongoose.connection

connection.once('open', () => {
  console.log('MongoDB Database Connection Established')
})

const seedsRouter = require('./routes/seeds')
const usersRouter = require('./routes/users')

app.use('/seeds', seedsRouter)
app.use('/users', usersRouter)

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'))
  })
}

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})
