import db from '../db'

const ratingsTableName = 'ratings.ratings'
export const saveRatings = async (ratings, trx = db) => {
    const rating = await trx(ratingsTableName)
        .insert({ ...ratings })
        .returning('id')
    return rating
}
