const validateTeam = (req, res, next) => {
    const { name, initials } = req.body;
  
    if (!name) return res.status(400).json({ message: 'O campo "nome" é obrigatório' });
    if (!initials) return res.status(400).json({ message: 'O campo "sigla" é obrigatório' });
    next();
  };
  
module.exports = validateTeam;