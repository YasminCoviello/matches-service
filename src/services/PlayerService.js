const { Player } = require("../entities/Player") ;
const { PlayerRepository } = require("../repositories/PlayerRepository");

exports.PlayerService = {
  createPlayer({ name, wins, defeats }) {
    const player = new Player({ name, wins, defeats });
    
    PlayerRepository.create(player);
    
    return player;
  },
  findAll() {
    return PlayerRepository.findAll();
  },
  findOne(id) {
    return PlayerRepository.findById(Number(id));
  }
}
