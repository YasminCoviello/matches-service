const players = [];
let lastId = 0;

class PlayerRepository {
  static findById(id) {
    return players.find((player) => player.id === id);
  }

  static findAll() {
    return players;
  }

  static create(player) {
    player.id = ++lastId;

    players.push(player);
  }
}

exports.PlayerRepository = PlayerRepository;
