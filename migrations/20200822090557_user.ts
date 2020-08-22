const Knex = require('knex')

exports.up = function (knex) {
    const query = `

    CREATE SCHEMA users;

    CREATE TABLE users.users (
        "createdAt" timestamptz DEFAULT now(),
        "updatedAt" timestamptz DEFAULT now(),
        id serial PRIMARY KEY,
        name TEXT,
        country TEXT
    );
    
    CREATE OR REPLACE FUNCTION update_updated_at()
    RETURNS trigger AS
    $$      
    begin
     NEW."updatedAt" = now(); 
     RETURN NEW;
    END;
    $$
    LANGUAGE 'plpgsql';
        
    CREATE TRIGGER users_updated
    BEFORE INSERT OR UPDATE
    ON users.users
    FOR EACH ROW
    EXECUTE PROCEDURE update_updated_at(); 
    `

    return knex.schema.raw(query)
}

exports.down = function (knex) {
    const query = `
    DROP TABLE business.business;
    DROP SCHEMA business;
    `
    return knex.schema.raw(query)
}
