import {
    fetchCandidates,
    storeCandidates,
    fetchCandidatesCount,
} from './handler'
export default function (app) {
    app.get('/getCandidates', function (req, res) {
        fetchCandidates(req, res)
    })
    app.get('/getCandidatesCount', function (req, res) {
        fetchCandidatesCount(req, res)
    })
    app.post('/addCandidates', function (req, res) {
        storeCandidates(req, res)
    })
}
