const express = require('express');
const path = require('path');
const app = express();
const { Client } = require('pg');

// Serve static files....
app.use(express.static(__dirname + '/dist/ng-mashup'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/ng-mashup/index.html'));
});

// default Heroku PORT
app.listen(process.env.PORT || 3000, () => {
  console.log('server running on' + process.env.PORT);
});



/**
 * const http = require('http');
const PORT = process.env.PORT || 5000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});
server.listen(PORT, () => {
  console.log(`Server running on ${PORT}/`);
});
 */