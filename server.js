// const express = require('express')
import express from 'express'
import regeneratorRuntime from 'regenerator-runtime'
const fileUpload = require('express-fileupload')
const app = express()
const port = 3000

const cors = require('cors')
app.use(cors())
app.use(fileUpload())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

require('./routes')(app)

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
})
