import { getToken } from '../../util'
import { verifyUser } from './domain'
import { async } from 'regenerator-runtime'
async function login(req, res) {
    try {
        const isUserAuth = await verifyUser(req.body)
        if (isUserAuth) {
            const { email } = req.body
            const accessToken = getToken(email)
            res.json({ accessToken })
        } else {
            res.status(401).send()
        }
    } catch (err) {
        res.status(400).json(err.message)
    }
}
export { login }
