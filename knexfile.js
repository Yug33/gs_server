require('@babel/register')({
    presets: ['@babel/preset-env'],
})

const PostgressConnectionStringParser = require('pg-connection-string')
const config = require('./config')

const connectionOptions = PostgressConnectionStringParser.parse(
    config.default.DB_CONNECTION_URI || ''
)
module.exports = {
    client: 'pg',
    connection: {
        host: connectionOptions.host,
        port: connectionOptions.port,
        database: connectionOptions.database,
        user: connectionOptions.user,
        password: connectionOptions.password,
    },
    pool: {
        min: 2,
        max: 10,
    },
    migrations: {
        tableName: 'knex_migrations',
    },
}
