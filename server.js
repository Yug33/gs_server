// const express = require('express')
import express from 'express'
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

require('./routes')(app)

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
})
