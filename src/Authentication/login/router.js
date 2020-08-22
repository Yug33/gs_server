import { login } from './handler'

export default function (app) {
    app.post('/login', function (req, res) {
        login(req, res)
    })
}
