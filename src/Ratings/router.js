import { storeRatings } from './handler'

export default function (app) {
    app.post('/addRatings', function (req, res) {
        storeRatings(req, res)
    })
}
