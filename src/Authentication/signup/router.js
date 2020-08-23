import { signup, verifyMail } from './handler'

export default function (app) {
    app.post('/signup', function (req, res) {
        signup(req, res)
    })
    app.post('/verifyMail', function (req, res) {
        verifyMail(req, res)
    })
}
