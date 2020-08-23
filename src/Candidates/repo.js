import db from '../db'

const candidateTableName = 'candidates.candidates'

const getCandidates = async (trx = db) => {
    const candidates = await trx(candidateTableName).select('*')
    return candidates
}
const getCandidateByEmail = async (email, trx = db) => {
    const user = await trx(candidateTableName).select('*').where({ email })
    if (user && user.length) return user[0]
    return null
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
        const result = await trx.schema.raw(query)
        debugger
    } catch (error) {
        console.log(error)
    }
}
export { getCandidates, addCandidates, getCandidateByEmail }
