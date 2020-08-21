import login from './handlers/Authentication/login/router'
import signup from './handlers/Authentication/signup/router'
module.exports = function (app) {
    signup(app)
    login(app)
}
