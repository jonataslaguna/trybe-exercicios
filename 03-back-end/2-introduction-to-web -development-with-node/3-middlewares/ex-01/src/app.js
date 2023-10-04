const crypto = require('crypto');
const express = require('express');
const validationName = require('./middlewares/validationName');
const validationPrice = require('./middlewares/validationPrice');
const validationDescription = require('./middlewares/validateDescription');
const validateCreatedAt = require('./middlewares/validateCreatedAt');
const validateRating = require('./middlewares/validateRating');
const validateDifficulty = require('./middlewares/validateDifficulty');
const validatedata = require('./middlewares/validateData');
const valiateAuthorization = require('./middlewares/valiateAuthorization.js')


function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}

module.exports = generateToken;

const app = express();

app.use(express.json());

app.post('/activities', 
    valiateAuthorization,
    validationName,
    validationPrice,
    validationDescription,
    validateCreatedAt,
    validateRating,
    validateDifficulty,
    (req, res) => {res.status(201).json({"message": "Atividade cadastrada com sucesso!" });
})

app.post('/signup',
    validatedata, (req, res) => {
    res.status(201).json({ token: generateToken() });
})


module.exports = app;

