import { saveUsers, getUserByEmail, saveEmailVerification } from '../repo'
import { processUserData } from './domain'
import { sendVerifyMail } from '../../EmailServices/domain'
import { getToken, verifyToken } from '../../util'
async function signup(req, res) {
    try {
        const userData = await processUserData(req.body)
        const user = await getUserByEmail(userData.email)
        if (!user) {
            const savedData = await saveUsers(userData)
            res.json({ signUp: 'user register successful' })
            const token = getToken(userData.email, savedData[0])
            sendVerifyMail(userData.email, token)
        } else {
            res.status(400).json({ message: 'Email is registered already' })
        }
    } catch (err) {
        res.status(400).json(err.message)
    }
}
async function verifyMail(req, res) {
    const { accessToken } = req.body
    try {
        const data = verifyToken(accessToken)
        console.log(data)
        if (data) {
            await saveEmailVerification(data.userId)
            res.json({
                code: 'MAIL_VERIFIED',
                message: 'email is verified successfully',
            })
        } else {
            res.status(400).json({
                code: 'INVALID_TOKEN',
                message: 'Email is not valid',
            })
        }
    } catch (e) {
        console.log(e)
        res.status(400).json({
            code: 'INVALID_TOKEN',
            message: 'Email is not valid',
        })
    }
}
export { signup, verifyMail }
