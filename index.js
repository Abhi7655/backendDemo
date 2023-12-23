require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/home', (req, res) => {
    res.send('Hello Home!')
  })
  app.get('/web', (req, res) => {
    res.send('<h1>Please login to our backend code</h1>')
  })

app.listen(process.env.port, () => {
  console.log(`process running at ${port}`)
})