import jwt from 'jsonwebtoken'
// todo : taking key from the ENV
function getToken(email) {
    const userEmail = { email: email }
    return jwt.sign(userEmail, 'Yogesh')
}

export { getToken }
