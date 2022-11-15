const { Router } = require('express');
const BookModel = require('../models/Books.js');

// TODO -- update this file to use your database and models instead of hard-coded cats data
// all tests should still pass

module.exports = Router()
  .get('/:id', async (req, res) => {
    const book = await BookModel.getById(req.params.id);
    res.json(book);
    console.log('re.params.id', req.params.id);
  })
  .get('/', async (req, res) => {
    const books = await BookModel.getAll();
    //   const filtered = books.map(({ id, title, author, published }) => ({}));
    res.json(books);
  });
