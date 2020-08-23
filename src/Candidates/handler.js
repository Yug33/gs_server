const DatauriParser = require('datauri/parser')
const parser = new DatauriParser()
import fs from 'fs'
import { getCandidates, addCandidates } from './repo'
import { uploadFile, getFileFromRequest } from '../util'
async function fetchCandidates(req, res) {
    const candidates = await getCandidates()
    res.json(candidates)
}
async function storeCandidates(req, res) {
    const { cover_letter, resume } = req.files

    const dataUri = (file) => {
        return parser.format('.pdf', file.data)
    }

    const dd = dataUri(cover_letter).content

    const uploaded = await uploadFile(dd)
}
export { fetchCandidates, storeCandidates }
