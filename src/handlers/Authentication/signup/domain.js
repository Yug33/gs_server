import jwt from 'jsonwebtoken'
import config from '../../../../config'
function getToken(email) {
    const userEmail = { email: email }
    return jwt.sign(userEmail, config.ACCESS_TOKEN_SECRETE)
}

export { getToken }
