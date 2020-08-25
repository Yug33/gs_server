import {
    getCandidates,
    addCandidates,
    getCandidateByEmail,
    getCandidatesCount,
    getCandidateByVector,
    getMyRatedCandidates,
} from './repo'
import { uploadFile } from '../util'
async function fetchCandidates(req, res) {
    const { limit, offset } = req.query
    const candidates = await getCandidates(limit, offset)
    res.json(candidates)
}
async function fetchCandidateByVector(req, res) {
    const { query } = req.query
    const candidates = await getCandidateByVector(query)
    res.json(candidates)
}
async function fetchCandidatesCount(req, res) {
    const candidatesCount = await getCandidatesCount()
    res.json(candidatesCount)
}
async function storeCandidates(req, res) {
    try {
        const { form } = req.body
        const { resume, cover_letter } = req.files
        const submittedInfo = JSON.parse(form)
        //TODO file upload5

        const isCandidate = await getCandidateByEmail(submittedInfo.email)
        if (!isCandidate) {
            const resumeLocation = await uploadFile(
                resume,
                form.email,
                'resume'
            )
            const coverLetterLocation = await uploadFile(
                cover_letter,
                form.email,
                'cover_letter'
            )
            const candidate = {
                ...submittedInfo,
                cover_letter: coverLetterLocation.Location,
                resume: resumeLocation.Location,
            }
            await addCandidates(candidate)
            return res.json({
                code: 'SUBMITTED_SUCCESSFUL',
                message: 'Profile submitted successful',
            })
        } else {
            res.status(400).json({
                code: 'EMAIL_USED',
                message: 'Error in request',
            })
        }
    } catch (error) {
        console.error(error)
    }
}
async function fetchMyRatedCandidates(req, res) {
    const { reviewerId } = req.query
    const candidates = await getMyRatedCandidates(reviewerId)
    console.log(candidates.rows)
    res.json(candidates.rows)
}
export {
    fetchCandidates,
    storeCandidates,
    fetchCandidatesCount,
    fetchCandidateByVector,
    fetchMyRatedCandidates,
}
