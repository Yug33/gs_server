import { getToken } from '../../util'
function login(req, res) {
    const { email, password } = req.body
    const accessToken = getToken(email)
    res.json({ accessToken })
}
export { login }
