import { fetchCandidates, storeCandidates } from './handler'
export default function (app) {
    app.get('/getCandidates', function (req, res) {
        fetchCandidates(req, res)
    })
    app.post('/addCandidates', function (req, res) {
        storeCandidates(req, res)
    })
}
