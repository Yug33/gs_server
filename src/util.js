import jwt from 'jsonwebtoken'
import config from '../config'
function getToken(email, userId) {
    const userEmail = { email, userId }
    return jwt.sign(userEmail, config.ACCESS_TOKEN_SECRETE)
}
function verifyToken(token) {
    return jwt.verify(token, config.ACCESS_TOKEN_SECRETE)
}

export { getToken, verifyToken }
