import db from '../db'

const candidateTableName = 'candidates.candidates'

const getCandidates = async (limit, offset, trx = db) => {
    const candidates = await trx(candidateTableName)
        .select('*')
        .limit(limit)
        .offset(offset)
    return candidates
}
const getCandidateByEmail = async (email, trx = db) => {
    const user = await trx(candidateTableName).select('*').where({ email })
    if (user && user.length) return user[0]
    return null
}
const getCandidateByVector = async (searchValue, trx = db) => {
    const query = `SELECT * FROM ${candidateTableName} WHERE vector @@ to_tsquery('${searchValue}')`
    debugger
    const results = await trx.schema.raw(query)
    return results.rows
}
const getCandidatesCount = async (trx = db) => {
    const count = await trx(candidateTableName).count()
    return count[0]
}
const addCandidates = async (candidate, trx = db) => {
    try {
        const {
            first_name,
            last_name,
            email,
            web_address,
            cover_letter,
            resume,
            do_you_like_working,
        } = candidate
        const query = `
    INSERT INTO ${candidateTableName} 
    (first_name, last_name, email, web_address,cover_letter,resume,do_you_like_working,vector)
    VALUES
    ('${first_name}',
    '${last_name}',
    '${email}',
    '${web_address}',
    '${cover_letter}',
    '${resume}',
    ${do_you_like_working},
    (to_tsvector('${first_name}') || 
     to_tsvector('${last_name}') || 
     to_tsvector('${email}')  || 
     to_tsvector('${web_address}')
    ));
    `
        return await trx.schema.raw(query)
    } catch (error) {
        console.log(error)
    }
}

export {
    getCandidates,
    addCandidates,
    getCandidateByEmail,
    getCandidatesCount,
    getCandidateByVector,
}
