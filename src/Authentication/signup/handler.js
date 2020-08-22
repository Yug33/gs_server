import { saveUsers } from '../repo'
import { processUserData } from './domain'
async function signup(req, res) {
    const userData = await processUserData(req.body)
    await saveUsers(userData)
    res.json({ signUp: 'done' })
}
export { signup }
