import { getToken } from '../../util'
import { saveUsers } from './repo'
async function signup(req, res) {
    const { email, password } = req.body
    await saveUsers(req.body)
    const accessToken = getToken(email)
    res.json({ accessToken })
}
export { signup }
