// const express = require('express')
import express from 'express'
const app = express()
const port = 3000

require('./routes')(app)

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
})
