const BookService = require('../services/book.service');

const getAll = async (req, res) => {
    const books = await BookService.getAll();
    res.status(200).json(books);
}

const getById = async (req, res) => {
    const { id } = req.params;
    const book = await BookService.getById(id);
    
    return res.status(book.status).json(book.data);

  };
  

module.exports ={
    getAll,
    getById,
}