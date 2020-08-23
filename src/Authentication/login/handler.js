import { getToken } from '../../util'
import { verifyUser } from './domain'
import { async } from 'regenerator-runtime'
import { getUserByEmail } from '../repo'
async function login(req, res) {
    try {
        const user = await getUserByEmail(req.body.email)
        if (!user) {
            res.status(401).send({
                code: 'USER_NOT_EXIST',
                message: 'Emails is not registered',
            })
            return
        }

        const isUserAuth = await verifyUser(req.body.password, user.password)
        if (isUserAuth) {
            const { email } = req.body
            const accessToken = getToken(email)
            res.json({ accessToken })
        } else {
            res.status(401).send({
                code: 'LOGIN_FAILED',
                message: 'Invalid username password',
            })
        }
    } catch (err) {
        console.log(err)
        res.status(400).json(err.message)
    }
}
export { login }
