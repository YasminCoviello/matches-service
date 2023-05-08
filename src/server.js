const express = require('express');
const { PlayerController } = require('./controllers/PlayerController');
const { MatchController } = require('./controllers/MatchController');

const app = express();
app.use(express.json());

const port = 3000;

// -- PLAYERS
app.get('/player/:id', PlayerController.findOne);
app.get('/player', PlayerController.findAll);
app.post('/player', PlayerController.create);


// -- MATCHES
app.get('/match/:id', MatchController.findOne);
app.get('/match', MatchController.findAll);
app.post('/match', MatchController.create);
app.post('/match/:id/execute', MatchController.execute);

app.listen(port, () => {
  console.log('Servidor rodando na porta: ', port);
})
