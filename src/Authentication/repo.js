import db from '../db'

const usersTableName = 'users.users'

export const saveUsers = async (users, trx = db) => {
    const usersId = await trx(usersTableName)
        .insert({ ...users })
        .returning('id')
    return usersId
}
export const getUserByEmail = async (email, trx = db) => {
    const user = await trx(usersTableName).select('*').where({ email })
    if (user && user.length) return user[0]
    return null
}
