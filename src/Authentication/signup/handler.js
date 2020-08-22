import { getToken } from '../../util'
function signup(req, res) {
    const { email, password } = req.body
    const accessToken = getToken(email)
    res.json({ accessToken })
}
export { signup }
