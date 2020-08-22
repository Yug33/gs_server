require('dotenv').config({ path: __dirname + '/.env' })
console.log(process.env.ACCESS_TOKEN_SECRETE)
const config = {
    ACCESS_TOKEN_SECRETE: process.env.ACCESS_TOKEN_SECRETE,
    DB_CONNECTION_URI: process.env.DB_CONNECTION_URI,
}
export default config
