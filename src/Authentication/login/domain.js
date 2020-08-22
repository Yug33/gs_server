import { async } from 'regenerator-runtime'
import { getUserByEmail } from '../repo'
const bcrypt = require('bcrypt')
async function verifyPassword(password, dbPassword) {
    return await bcrypt.compare(password, dbPassword)
}
async function verifyUser(userData) {
    const { email, password } = userData
    const user = await getUserByEmail(email)
    if (!user) {
        throw Error('User does not exist')
    }
    const isUserVerified = await verifyPassword(password, user.password)
    if (!isUserVerified) {
        throw Error('Email or password incorrect')
    }
    return isUserVerified
}

export { verifyPassword, verifyUser }
