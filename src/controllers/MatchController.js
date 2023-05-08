const { MatchService } = require("../services/MatchService");

exports.MatchController = {
  findOne: (req, res) => {
    const response = MatchService.findOne(req.params.id);
    res.send(response);
  },
  findAll: (req, res) => {
    const response = MatchService.findAll();
    res.send(response);
  },
  create: (req, res) => {
    try {
      const response = MatchService.createMatch(req.body);
      res.send(response);
    } catch(e) {
      res.status(400).send({ message: e.message });
    }
  },
  execute: (req, res) => {
    try {
      const response = MatchService.executeMatch(req.params.id);
      res.send(response);
    } catch(e) {
      res.status(400).send({ message: e.message });
    }
  }
}