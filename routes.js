import login from './src/Authentication/login/router'
import signup from './src/Authentication/signup/router'
module.exports = function (app) {
    signup(app)
    login(app)
}
