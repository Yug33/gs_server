import db from '../db'

const usersTableName = 'candidates.candidates'

const getCandidates = async (trx = db) => {
    const candidates = await trx(usersTableName).select('*')
    return candidates
}
export { getCandidates }
