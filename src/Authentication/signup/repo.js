import db from '../../db'

const usersTableName = 'users.users'

export const saveUsers = async (users, trx = db) => {
    const usersId = await trx(usersTableName)
        .insert({ ...users })
        .returning('id')
    return usersId
}
