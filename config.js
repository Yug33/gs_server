require('dotenv').config()
const config = {
    ACCESS_TOKEN_SECRETE: process.env.ACCESS_TOKEN_SECRETE,
    DB_CONNECTION_URI: process.env.DB_CONNECTION_URI,
}
console.log(config)
export default config
