const Knex = require('knex')

exports.up = function (knex) {
    const query = `

    CREATE SCHEMA candidates;

    CREATE TABLE candidates.candidates (
        "createdAt" timestamptz DEFAULT now(),
        "updatedAt" timestamptz DEFAULT now(),
        id serial PRIMARY KEY,
        first_name TEXT,
        last_name TEXT,
        email TEXT UNIQUE,
        web_address TEXT,
        cover_letter TEXT,
        resume TEXT,
        do_you_like_working boolean,
        vector tsvector NOT NULL
    );
        
    CREATE TRIGGER candidates_updated
    BEFORE INSERT OR UPDATE
    ON candidates.candidates
    FOR EACH ROW
    EXECUTE PROCEDURE update_updated_at(); 
    `

    return knex.schema.raw(query)
}

exports.down = function (knex) {
    const query = `
    DROP TABLE candidates.candidates;
    DROP SCHEMA candidates;
    `
    return knex.schema.raw(query)
}
