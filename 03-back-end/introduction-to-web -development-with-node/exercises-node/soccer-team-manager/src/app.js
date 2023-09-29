const express = require('express');

const app = express();

app.use(express.json());

const teams = [
    {
      id: 1,
      name: 'São Paulo Futebol Clube',
      initials: 'SPF',
    },
    {
      id: 2,
      name: 'Clube Atlético Mineiro',
      initials: 'CAM',
    },
];

app.get('/teams', (req, res) => res.status(200).json({ teams })); 

app.get('/teams/:id', (req, res) => {
  const { id } = req.params;

  try {
    const teamFound = teams.find((team) => team.id === Number(id));
    if (!teamFound) {
      res.status(404).json({ message: 'Team not found' });  
    }
    res.status(200).json(teamFound);
  } catch (error) {
    res.status(404).json({ message: 'Team not found' });
  }
}); 

app.post('/teams', (req, res) => {
    const newTeam = { ...req.body };
    teams.push(newTeam);
  
    res.status(201).json({ team: newTeam });
  });

app.put('/teams/:id', (req, res) => {
    const { id } = req.params;
    const { name, initials } = req.body;
  
    // procurando o elemento que tenha o mesmo id params
    const updateTeam = teams.find((team) => team.id === Number(id)); 
  
    if (!updateTeam) {
      return res.status(404).json({ message: 'Team not found' });
    }

    // Alterando a propriedade name e initials do elemento que tenha o mesmo id do parametro passado
    updateTeam.name = name;
    updateTeam.initials = initials;
    res.status(200).json({ updateTeam });
  });

  app.delete('/teams/:id', (req, res) => {
    const { id } = req.params;
    
    const updadteTeams = teams.filter((team) => team.id !== Number(id));
  
    res.status(200).json(updadteTeams);
  });

module.exports = app;