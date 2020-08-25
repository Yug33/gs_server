import {
    fetchCandidates,
    storeCandidates,
    fetchCandidatesCount,
    fetchCandidateByVector,
    fetchMyRatedCandidates,
    fetchFiveStarCandidates,
} from './handler'
import { authenticateToken } from '../util'
export default function (app) {
    app.get('/getCandidates', authenticateToken, function (req, res) {
        fetchCandidates(req, res)
    })
    app.get('/getCandidatesCount', authenticateToken, function (req, res) {
        fetchCandidatesCount(req, res)
    })
    app.get('/getCandidateByVector', authenticateToken, function (req, res) {
        fetchCandidateByVector(req, res)
    })
    app.post('/addCandidates', authenticateToken, function (req, res) {
        storeCandidates(req, res)
    })
    app.get('/getMyRatedCandidates', authenticateToken, function (req, res) {
        fetchMyRatedCandidates(req, res)
    })
    app.get('/getFiveStarCandidates', authenticateToken, function (req, res) {
        fetchFiveStarCandidates(req, res)
    })
}
