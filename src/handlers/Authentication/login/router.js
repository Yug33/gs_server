export default function (app) {
    app.post('/login', function (req, res) {
        const { email, password } = req.body
        //verify email and password
        const accessToken = getToken(email)
        res.json({ accessToken })
    })
}
