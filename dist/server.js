// const express = require('express')
import express from 'express'
var app = express()
var port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

require('./routes')(app)

app.listen(port, function () {
    console.log('Server is listening at http://localhost:' + port)
})
