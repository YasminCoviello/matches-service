const { rankingApi } = require("../api/ranking");
const { Match } = require("../entities/Match");
const { MatchRepository } = require("../repositories/MatchRepository");
const { PlayerRepository } = require("../repositories/PlayerRepository");

exports.MatchService = {
  findAll() {
    return MatchRepository.findAll();
  },
  findOne(id) {
    return MatchRepository.findById(Number(id));
  },
  createMatch({ player1Id, player2Id, date }) {
    const player1 = PlayerRepository.findById(player1Id);
    const player2 = PlayerRepository.findById(player2Id);
    
    if(!player1 || !player2) throw new Error('Player 1 ou 2 não existe.');

    const match = new Match({ 
      player1,
      player2,
      date,
    });

    MatchRepository.create(match);

    return match;
  },
  executeMatch(matchId) {
    const match = MatchRepository.findById(Number(matchId));

    const [winner, loser] = Math.random() < 0.5 
      ? ['player1', 'player2'] 
      : ['player2', 'player1'];
    match.winner = winner;

    const playerWinner = PlayerRepository.findById(match[winner].id);
    const playerLoser = PlayerRepository.findById(match[loser].id);

    playerWinner.wins++;
    playerLoser.defeats++;

    return match;
  },
}
