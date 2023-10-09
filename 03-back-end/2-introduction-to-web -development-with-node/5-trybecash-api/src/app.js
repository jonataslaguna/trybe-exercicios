const express = require('express');
const connection = require('./db/connection');

const app = express();

app.use(express.json());

module.exports = app;

app.get('/users', async (req, res) => {
  const [users] = await connection.execute('SELECT * FROM people');

  return res.status(200).json(users);
})

app.post('/users', async (req, res) => {
  const { firstName, lastName, email, phone } = req.body;

  const user = {
    firstName,
    lastName,
    email,
    phone,
  };

  const dataBaseResponse = await connection.execute(
   `INSERT INTO people (first_name, last_name, email, phone) 
   VALUES (?, ?, ?, ?)`, [firstName, lastName, email, phone]);

  return res.status(200).json({id: dataBaseResponse[0].insertId, ...user});
});

module.exports = app;