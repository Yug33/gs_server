import { getToken } from '../../util'
import { verifyUser } from './domain'
import { async } from 'regenerator-runtime'
async function login(req, res) {
    const isUserAuth = await verifyUser(req.body)
    if (isUserAuth) {
        const { email } = req.body
        const accessToken = getToken(email)
        res.json({ accessToken })
    } else {
        res.status(401).send()
    }
}
export { login }
