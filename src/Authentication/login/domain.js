import { async } from 'regenerator-runtime'
import { getUserByEmail } from '../repo'
const bcrypt = require('bcrypt')
async function verifyPassword(password, dbPassword) {
    return bcrypt.compare(password, dbPassword)
}
async function verifyUser(userData) {
    const { email, password } = userData
    const user = await getUserByEmail(email)
    return verifyPassword(password, user.password)
}

export { verifyPassword, verifyUser }
