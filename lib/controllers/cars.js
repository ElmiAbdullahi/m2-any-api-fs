const { Router } = require('express');
const CarModel = require('../models/Cars.js');

// must update this file to use your database and models instead of hard coded cars data
module.exports = Router()
  .get('/', async (req, res) => {
    const cars = await CarModel.getAll();
    //   const filtered = cars.map(({ id, name }) => ({ id, name }));
    res.json(cars);
  })
  .get('/:id', async (req, res) => {
    const car = await CarModel.getById(req.params.id);
    res.json(car);
  });
