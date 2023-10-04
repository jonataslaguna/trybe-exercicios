const validateDifficulty = (req, res, next) => {
    const { description } = req.body;
    const { difficulty } = description;

    if (difficulty ===  'Fácil' || difficulty === 'Médio' || difficulty === 'Difícil' ) {
        next();
    }
    
    return res.status(400).json({ "message": "O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'" });
}

module.exports = validateDifficulty;