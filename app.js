const express = require('express')
const app = express()
const port = parseInt(process.env.port) || 8080

app.get('/', (req, res) => {
  res.send('Hello Anshika!')
})

app.get('/kill', (req, res) => {
  console.log('killing server v1');
})
  

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})