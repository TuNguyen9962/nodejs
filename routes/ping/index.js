const pingController = require('../../controllers/ping/pingController');

module.exports = {
  GET: pingController.getPing
};