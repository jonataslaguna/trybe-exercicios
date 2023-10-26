const express = require('express');

const BookController = require('./controllers/book.controllers')

const app = express();

app.use(express.json());

app.get('/books', BookController.getAll);

app.get('/books/:id', BookController.getById);

module.exports = app;