import Knex from 'knex'
import knexconfig from '../knexfile'

const db = Knex(knexconfig)

export default db
