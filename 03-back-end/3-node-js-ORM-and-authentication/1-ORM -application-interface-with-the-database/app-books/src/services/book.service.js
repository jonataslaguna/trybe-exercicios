const {Book} = require('../models');

const getAll = async () => {
    const books = await Book.findAll();
    return books;
}

const getById = async (bookId) => {
    const book = await Book.findByPk(bookId);
  
    if(!book) return {status: 404, data: {message: 'Book not found'}}

    return {status: 200, data: book};
}

module.exports = {
    getAll,
    getById,
}