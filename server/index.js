// server
const path = require('path')

const express = require('express')

const app = express()

app.get('/', function (req, res) {
  const filePath = path.resolve(__dirname, './index.html')
  res.sendFile(filePath)
})


app.get('/api/products', function (req, res) {
    const filePath = path.resolve(__dirname, './data.json')
    res.sendFile(filePath)
})

app.get('/api/products/available', function (req, res) {
    const data = require('./data.json')
    const availableProducts = {}
  
    Object.entries(data).forEach(([key, val]) => {
      if (val.availability > 0) {
        availableProducts[key] = val
      }
    })
  
    res.json(availableProducts)
  })

app.listen(3000, function () {
    console.log('Server běží na adrese http://localhost:3000')
})