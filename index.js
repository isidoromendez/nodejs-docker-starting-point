const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const env = process.env.NODE_ENV || "unknow"

app.get('/', (req, res) => {
  res.send(`Hello World on appport:${port} and env:${env}!!`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port} env:${env}`)
})
