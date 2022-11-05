const { Router } = require('express');
const { cars } = require('../cars-data');

// must update this file to use your database and models instead of hard coded cars data
module.exports = Router().get('/', (req, res) => {
  const filtered = cars.map(({ id, name }) => ({ id, name }));
  res.json(filtered);
});
