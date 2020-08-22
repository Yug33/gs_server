require('@babel/register')({
    presets: ['@babel/preset-env'],
    plugins: ['@babel/plugin-proposal-export-default-from'],
})

// Import the rest of our application.
module.exports = require('./server.js')
