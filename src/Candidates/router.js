import {
    fetchCandidates,
    storeCandidates,
    fetchCandidatesCount,
    fetchCandidateByVector,
} from './handler'
export default function (app) {
    app.get('/getCandidates', function (req, res) {
        fetchCandidates(req, res)
    })
    app.get('/getCandidatesCount', function (req, res) {
        fetchCandidatesCount(req, res)
    })
    app.get('/getCandidateByVector', function (req, res) {
        fetchCandidateByVector(req, res)
    })
    app.post('/addCandidates', function (req, res) {
        storeCandidates(req, res)
    })
}
