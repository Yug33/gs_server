import login from './src/handlers/Authentication/login/router'
import signup from './src/handlers/Authentication/signup/router'
module.exports = function (app) {
    signup(app)
    login(app)
}
