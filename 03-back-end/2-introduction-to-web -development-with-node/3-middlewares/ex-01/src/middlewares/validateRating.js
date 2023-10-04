const validateRating = (req, res, next) => {
    const { description } = req.body;
    const { rating } = description;

    if (!Number.isInteger(rating) || Number(rating) < 1 || Number(rating) > 5 ) {
        return res.status(400).json({ "message": "O campo rating deve ser um número inteiro entre 1 e 5" });
    }

    next();
}

module.exports = validateRating;