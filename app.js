const express = require('express')
const app = express()
const port = parseInt(process.env.port) || 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/kill', (req, res) => {
  console.log('killing server');
})
  

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})