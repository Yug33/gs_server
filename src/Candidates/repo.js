import db from '../db'

const candidateTableName = 'candidates.candidates'

const getCandidates = async (trx = db) => {
    const candidates = await trx(candidateTableName).select('*')
    return candidates
}

const addCandidates = async (candidate, trx = db) => {
    const usersId = await trx(candidateTableName)
        .insert({ ...candidate })
        .returning('id')
    return usersId
}
export { getCandidates, addCandidates }
