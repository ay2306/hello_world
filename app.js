const express = require('express')
const app = express()
const port = process.env.port|3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/kill', (req, res) => {
  console.log('killing server');
})
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})