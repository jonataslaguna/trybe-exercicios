const express = require('express');
const connection = require('./db/connection');

const app = express();

app.use(express.json());

module.exports = app;

app.get('/users', async (req, res) => {
  const [users] = await connection.execute('SELECT * FROM people');

  return res.status(200).json(users);
})

module.exports = app;