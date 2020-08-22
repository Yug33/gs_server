import { getToken } from './domain'
export default function (app) {
    app.post('/signup', function (req, res) {
        const { email, password } = req.body
        //verify email
        const accessToken = getToken(email)
        res.json({ accessToken })
    })
}
