import { fetchCandidates } from './handler'
export default function (app) {
    app.get('/getCandidates', function (req, res) {
        fetchCandidates(req, res)
    })
}
