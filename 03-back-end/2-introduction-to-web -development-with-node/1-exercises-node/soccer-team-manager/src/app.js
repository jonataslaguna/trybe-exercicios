const express = require('express');
const teams = require('./teams');
const validateTeam = require('./middlewares/validateTeam');
const existingId = require('./middlewares/existingId');

const app = express();

/* const apiCredentials = require('./middlewares/apiCredentials');
 */
app.use(express.json());

/* app.use(apiCredentials); */

app.get('/teams', (req, res) => res.status(200).json({ teams })); 

app.get('/teams/:id', existingId, (req, res) => {
  const { id } = req.params;
    const teamFound = teams.find((team) => team.id === Number(id));
    res.json(teamFound);  
}); 

app.post('/teams', validateTeam, (req, res) => {
    const newTeam = { ...req.body };
    teams.push(newTeam);
  
    res.status(201).json({ team: newTeam });
});

app.put('/teams/:id', existingId, validateTeam, (req, res) => {
    const { id } = req.params;
    const { name, initials } = req.body;
  
    // procurando o elemento que tenha o mesmo id params
    const updateTeam = teams.find((team) => team.id === Number(id)); 

    // Alterando a propriedade name e initials do elemento que tenha o mesmo id do parametro passado
    updateTeam.name = name;
    updateTeam.initials = initials;
    res.status(200).json({ updateTeam });
});

app.delete('/teams/:id', existingId, (req, res) => {
    const { id } = req.params;
    
    const updadteTeams = teams.filter((team) => team.id !== Number(id));
  
    res.status(200).json(updadteTeams);
});

module.exports = app;