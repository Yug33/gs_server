import login from './src/Authentication/login/router'
import signup from './src/Authentication/signup/router'
import candidates from './src/Candidates/router'
import ratings from './src/Ratings/router'
module.exports = function (app) {
    signup(app)
    login(app)
    candidates(app)
    ratings(app)
}
