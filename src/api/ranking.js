const axios = require('axios').default;

const RANKING_SERVICE_URL = 'http://localhost:3001/';

const rankingApi = axios.create({
  baseURL: RANKING_SERVICE_URL
});

exports.rankingApi = rankingApi;
