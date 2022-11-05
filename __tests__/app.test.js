const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const { request } = require('express');
const { cars } = require('../lib/cars-data.js');
// const request = require('supertest');
// const app = require('../lib/app');

describe('cars routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/cars should return list of cars', async () => {
    const res = await request(app).get('/cars');
    const expected = cars.map((car) => {
      return { id: car.id, name: car.make, model: car.model, year: car.year };
    });
    expect(res.body).toEqual(expected);
  });
  afterAll(() => {
    pool.end();
  });
});
