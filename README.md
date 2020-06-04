# knExpress

## Introduction

A Express boilerplate for fast API development, powered with Knex.js

## Preparation
```bash
#Install Knex package globally:

npm i -g knex

or 

#Execute Knex commands with NPX:

npx knex (command)
```
## Features

```
- Database Support
  - PostgreSQL
  - MySQL
  - MariaDB
  - SQLite
- Express
- Knex.js 
- JWT
- CORS
- Morgan (https://github.com/expressjs/morgan)
- Nodemon
```

## Getting started

### Express

```bash
# clone the project
git clone https://github.com/dev-leonzera/knExpress.git

# enter the project directory
cd knExpress

# install dependency
npm i

# run the app
npm run dev

```
### Knex
```bash
#Init Knex.js

npm run init(After all packages installation)

or

npx knex init

This will generate a knexfile, where you must configurate with your database infos, and the directories path for migrations and seeds.

For more information, check out the Knex.js docs (http://knexjs.org/)

#Run Migrations

npm run migrate

#Run Seeds

npm run seeds
```
## Changelog
```bash
#0.1 — 21/05/2020

--Project creation and first commit

#0.2 - 04/06/2020

--Added some scripts inside package.json
```

