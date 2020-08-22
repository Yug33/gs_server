import { saveUsers, getUserByEmail } from '../repo'
import { processUserData } from './domain'
async function signup(req, res) {
    try {
        const userData = await processUserData(req.body)
        const user = await getUserByEmail(userData.email)
        if (!user) {
            await saveUsers(userData)
            res.json({ signUp: 'user register successful' })
        } else {
            res.status(400).json({ message: 'Email is registered already' })
        }
    } catch (err) {
        res.status(400).json(err.message)
    }
}
export { signup }
