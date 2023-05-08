class Match {
  id;
  player1; 
  player2;
  date;
  winner;

  constructor({
    id, player1, player2, date, winner, score
  }) {
    this.id = id,
    this.player1 = player1,
    this.player2 = player2,
    this.date = date,
    this.winner = winner
  }
}

exports.Match = Match;
