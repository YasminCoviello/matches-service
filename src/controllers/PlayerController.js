const { PlayerService } = require("../services/PlayerService");

exports.PlayerController = {
  findOne: (req, res) => {
    const response = PlayerService.findOne(req.params.id);
    res.send(response);
  },
  findAll: (req, res) => {
    const response = PlayerService.findAll();
    res.send(response);
  },
  create: (req, res) => {
    const response = PlayerService.createPlayer(req.body);
    res.send(response);
  }
}
