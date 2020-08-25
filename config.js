require('dotenv').config()
const config = {
    ACCESS_TOKEN_SECRETE: process.env.ACCESS_TOKEN_SECRETE,
    DB_CONNECTION_URI: process.env.DB_CONNECTION_URI,
    SENDGRID_HOST: process.env.SENDGRID_HOST,
    SENDGRID_USER: process.env.SENDGRID_USER,
    SENDGRID_PASS: process.env.SENDGRID_PASS,

    S3_ID: process.env.S3_ID,
    S3_SECRET: process.env.S3_SECRET,
    BUCKET_NAME: process.env.BUCKET_NAME,
}
console.log(config)
export default config
