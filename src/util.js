var cloudinary = require('cloudinary')
var multiparty = require('multiparty')
import jwt from 'jsonwebtoken'
import config from '../config'
function getToken(email, userId) {
    const userEmail = { email, userId }
    return jwt.sign(userEmail, config.ACCESS_TOKEN_SECRETE)
}
function verifyToken(token) {
    return jwt.verify(token, config.ACCESS_TOKEN_SECRETE)
}

async function uploadFile(file) {
    cloudinary.config({
        cloud_name: 'dvoemnfto',
        api_key: '814262874231755',
        api_secret: 'hIkyWIi9xoqX0Tneb76fDMyx7_M',
    })

    try {
        cloudinary.uploader
            .upload(file, { flag: 'attachment' })
            .then((result) => {
                const image = result.url
            })
    } catch (e) {
        console.log(e)
    }
}
export { getToken, verifyToken, uploadFile }
