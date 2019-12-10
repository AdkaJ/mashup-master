import * as express  from 'express';
const hostname = 'ec2-54-246-90-26.eu-west-1.compute.amazonaws.com';
const port = 5432; 
const server = express();
server.get('postgres://wpgqdnfuelksje:f6919744ee47cea2f6c8d62ded21790117ff5d28a345b05ac4f8464a3a7b863a@ec2-54-246-90-26.eu-west-1.compute.amazonaws.com:5432/d7e8ses4hgi5s3', (req, res, next) => {   
  res.statusCode = 200;   
  res.setHeader('Content-Type', 'text/plain');   
  res.end('Hello World');
});
server.listen(port, hostname, () => {     
  // connect to the DB
  console.log(`Server running at http://${hostname}:${port}/`);
});