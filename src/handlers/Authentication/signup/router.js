import { getToken } from './domain'
import { signup } from './handler'
export default function (app) {
    app.post('/signup', function (req, res) {
        signup(req, res)
    })
}
