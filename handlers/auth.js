import config from '../config'
export function authenticateToken(req, res, next) {
    const { authorization } = req.headers
    const token = authorization && authorization.split('.')[1]
    if (!token) {
        res.sendStatus(401)
    }
    jwt.verify(authorization, config.ACCESS_TOKEN_SECRETE, (err, data) => {
        if (err) {
            res.sendStatus(403)
        } else {
            req.email = data.email
            next()
        }
    })
}
export { authenticateToken }
