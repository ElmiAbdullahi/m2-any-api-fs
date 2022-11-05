const { Router } = require('express');
const CarModel = require('../models/cars-model.js');

// must update this file to use your database and models instead of hard coded cars data
module.exports = Router().get('/', async (req, res) => {
  const cars = await CarModel.getAll();
  //   const filtered = cars.map(({ id, name }) => ({ id, name }));
  res.json(cars);
});
