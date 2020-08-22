import { getCandidates } from './repo'
async function fetchCandidates(req, res) {
    const candidates = await getCandidates()
    res.json(candidates)
}
export { fetchCandidates }
