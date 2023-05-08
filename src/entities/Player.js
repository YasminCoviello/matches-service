class Player {
  id;
  name;
  wins;
  defeats;

  constructor({
    id, name, wins, defeats,
  }) {
    this.id = id,
    this.name = name,
    this.wins = wins || 0,
    this.defeats = defeats || 0
  }
}

exports.Player = Player;
