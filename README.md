### initial ###

Run `npx express-generator` & `npm install`

## Install nodemon

Run `npm install nodemon --save-dev` & add `"dev": "nodemon app.js"` in package.json

## Database
Create database : `hederastone`

Run `npm i -D dotenv` & create .env file 

DB_HOST = localhost;
DB_USER = labber;
DB_PASS = labber;
DB_NAME = hederastone;
DB_PORT = 5432;

Install pg
Run `npm i pg` and & `npm i pg-native`

Add db:reset in package.json under scripts:
`"db:reset": "node ./db/reset.js"`






