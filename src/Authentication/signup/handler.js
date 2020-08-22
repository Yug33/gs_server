import { saveUsers } from '../repo'
import { processUserData } from './domain'
async function signup(req, res) {
    const userData = await processUserData(req.body)
    await saveUsers(userData)
    res.json({ login: 'done' })
}
export { signup }
