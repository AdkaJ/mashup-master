/*
import { Sequelize } from 'sequelize';
import { dbconfig } from './config'; // DB connection parameters
export const sequelize = new Sequelize(dbconfig.database, dbconfig.username, dbconfig.password);
sequelize.authenticate().then(() => {
 console.log("Connected to DB");
})
.catch((err) => {
 console.log(err);
})
*/
const pg = require('pg');
const connectionString = 'postgres://wpgqdnfuelksje:f6919744ee47cea2f6c8d62ded21790117ff5d28a345b05ac4f8464a3a7b863a@ec2-54-246-90-26.eu-west-1.compute.amazonaws.com:5432/d7e8ses4hgi5s3';

const client = new pg.Client(connectionString);
client.connect();
/*
const query = client.query(
  'CREATE TABLE items(title SERIAL PRIMARY KEY, urltext VARCHAR(40) not null)');
query.on('end', () => { client.end(); });
*/