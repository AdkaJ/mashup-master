const express = require('express');
const path = require('path');
const http = require('http');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const { pool } = require('./src/server/database');

// Serve static files....
app.use(express.static(__dirname + '/dist/ng-mashup'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/ng-mashup/index.html'));
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

const getNews = (request, response) => {
  pool.query('SELECT * FROM favoritenews', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const addNews = (request, response) => {
  const { title, urladdress } = request.body

  pool.query('INSERT INTO books (title, urladdress) VALUES ($1, $2)', [title, urladdress], error => {
    if (error) {
      throw error
    }
    response.status(201).json({ status: 'success', message: 'Book added.' })
  })
}

app
  .route('/favoritenews')
  // GET endpoint
  .get(getNews)
  // POST endpoint
  .post(addNews)

// default Heroku PORT
app.listen(process.env.PORT || 3000, () => {
  console.log('server running on' + process.env.PORT);
});

