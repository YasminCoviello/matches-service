const matches = [];
let lastId = 0;

class MatchRepository {
  static create(match) {
    match.id = ++lastId;
    matches.push(match);
  }

  static findById(matchId) {
    return matches.find(match => match.id === matchId);
  }

  static findAll() {
    return matches;
  }
}

exports.MatchRepository = MatchRepository;
