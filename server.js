const express = require('express');
const path = require('path');
const app = express();
const { Client } = require('pg');

// Serve static files....
app.use(express.static(__dirname + '/dist/mashup-master-app'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/mashup-master-app/index.html'));
});

// default Heroku PORT
app.listen(process.env.PORT || 3000);

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});