const express = require('express')
const app = express()

const hostname = '127.0.0.1'   // set constants
const port = 3002

app.get('/', function (req, res) {
  res.send('Welcome home!')
})

app.get('/Nishanth', function (req, res) {
  res.send('<p style="background-color:grey;">Hello I am <b style="color:Orange;">Nishanth Reddy</b>.<br> This is what I added</p>')
})

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.get('/respond',  (req, res) =>{
  res.send('<h1 style="color:green;">Good to go</h1>')
})

app.get('/greeting',  (req, res) =>{
  res.send('<h1 style="color:Orange;">How are you!</h1> ')
})

app.get('/buddy',  (req, res) =>{
  res.send('<h1 style="color:Tomato;">Hey dude</h1>')
})

// handle non-existant routes
app.use((req, res, next) => {
  res.status(404).send('status 404 - that page was not found');
})

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://${hostname}:${port}/`)
  console.log('Hit CTRL-C CTRL-C to stop\n')
})

