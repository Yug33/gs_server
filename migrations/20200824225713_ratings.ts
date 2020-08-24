const Knex = require('knex')

exports.up = function (knex) {
    const query = `
    CREATE SCHEMA ratings;
    CREATE TABLE ratings.ratings (
        "createdAt" timestamptz DEFAULT now(),
        "updatedAt" timestamptz DEFAULT now(),
        id serial PRIMARY KEY,
        ratings INTEGER,
        reviewer_id INT REFERENCES users.users(id),
        candidate_id INT REFERENCES candidates.candidates(id)

    );`
    return knex.schema.raw(query)
}

exports.down = function (knex) {
    const query = `
    DROP TABLE ratings.ratings;
    DROP SCHEMA ratings;
    `
    return knex.schema.raw(query)
}
