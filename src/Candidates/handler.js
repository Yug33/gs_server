const DatauriParser = require('datauri/parser')
const parser = new DatauriParser()
import fs from 'fs'
import { getCandidates, addCandidates, getCandidateByEmail } from './repo'
import { uploadFile, getFileFromRequest } from '../util'
async function fetchCandidates(req, res) {
    const candidates = await getCandidates()
    res.json(candidates)
}
async function storeCandidates(req, res) {
    try {
        const { form } = req.body
        const submittedInfo = JSON.parse(form)
        //TODO file upload
        const candidate = {
            ...submittedInfo,
            cover_letter: 'abx',
            resume: 'pow',
        }
        const isCandidate = await getCandidateByEmail(submittedInfo.email)
        if (!isCandidate) {
            await addCandidates(candidate)
            return res.json({
                code: 'SUBMITTED_SUCCESSFUL',
                message: 'Profile submitted successful',
            })
        } else {
            res.status(400).json({
                code: 'REQUEST_FAILED',
                message: 'Error in request',
            })
        }
    } catch (error) {
        console.error(error)
    }
}
export { fetchCandidates, storeCandidates }
