

## Project setup

The project has been built using node version `10.16.1` so make user you have the same version installed.
The project stack is as follows:

- Language: Javascript
- Web Framework: Express
- Database: Postgres

* Clone the repo to a local directory to download the project.  
`git clone`  

* Once the project is downloaded you need to make sure you install your dependencies:  
`npm install`  

* Project configuration is present `.env` file. Use `.env.sample` file as sample.
`cp .env.sample .env`

* Install Postgres database

For mac download & install [Postgres app](https://postgresapp.com/)

For ubuntu: `sudo apt install postgresql`

* Setup database user and database:
`./setup_db.sh`

## Project workflow

* To create or update the database using migration file you have to run:
`npm run db:migrate` command.

* Now your project is ready to go. Run your project using the following command:  
`npm run start`  


* To reset database:
`psql -U postgres -f setup-db.sql`

* To create or update the database using migration file you have to run:
`npm run db:migrate` command.

