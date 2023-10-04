const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const messageError = "I'm sorry Dave, I'm afraid I can't do that";

const app = express();

const moviesPath = path.resolve(__dirname, './movies.json');

const readFile = async () => {
  try {
    const data = await fs.readFile(moviesPath);
    return JSON.parse(data);
  } catch (error) {
    console.error(messageError);
  }
};

app.get('/movies', async (req, res) => {
    const allMovies = await readFile();
    res.status(200).json(allMovies);
});

app.get('/movies/:id', async (req, res) => {
    const {id} = req.params;
    try {
       const movies = await readFile();
       const movie = movies.find((element) => element.id === Number(id));
       res.status(200).json(movie);
     } catch (err) {
       res.status(500).send({ message: messageError });
     }
});

app.post('/movies', async (req, res) => {
  try {
     const movies = await readFile();
      const { movie, price } = req.body;
         const newMovie = {
           id: movies[movies.length - 1].id + 1,
           movie,
           price,
         };
         
         const allMovies = JSON.stringify([...movies, newMovie]);
         await fs.writeFile(moviesPath, allMovies);
        res.status(201).json(newMovie);
       } catch (err) {
         res.status(500).send({ message: err.message });
       }
     });



module.exports = app;