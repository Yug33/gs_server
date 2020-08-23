import { async } from 'regenerator-runtime'
import { getUserByEmail } from '../repo'
const bcrypt = require('bcrypt')
async function verifyPassword(password, dbPassword) {
    return await bcrypt.compare(password, dbPassword)
}
async function verifyUser(enteredPassword, registeredPassword) {
    const isUserVerified = await verifyPassword(
        enteredPassword,
        registeredPassword
    )

    return isUserVerified
}

export { verifyPassword, verifyUser }
