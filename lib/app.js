const express = require('express');

const app = express();

// Built in middleware
app.use(express.json());

// App routes
app.use('/cars', require('./controllers/cars'));
app.use('/books2', require('./controllers/books2'));

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
