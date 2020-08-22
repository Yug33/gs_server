const bcrypt = require('bcrypt')
const saltRounds = 10
async function processUserData(userData) {
    const { password } = userData
    const hash = await bcrypt.hash(password, saltRounds)
    return { ...userData, ...{ password: hash } }
}
export { processUserData }
