const teams = require('../teams');

const existingId = (req, res, next) => {
    const { id } = req.params;
  
    if (teams.some((team) => team.id === Number(id))) {
      return next();
    }
  
    res.status(400).json({ message: 'Time não encontrado' });
  };

module.exports = existingId;