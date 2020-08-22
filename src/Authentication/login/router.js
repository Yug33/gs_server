import { login } from './handler'

export default function (app) {
    app.post('/login', function (req, res) {
        //verify email and password
        login(req, res)
    })
}
