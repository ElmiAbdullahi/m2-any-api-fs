const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
// const { request } = require('express');
const request = require('supertest');
const app = require('../lib/app');
const { cars } = require('../lib/cars-data.js');

describe('cars books routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/cars should return list of cars', async () => {
    const res = await request(app).get('/cars');
    const expected = cars.map((car) => {
      return { id: car.id, make: car.make, model: car.model, year: car.year };
    });
    expect(res.body).toEqual(expected);
  });

  it('/cars/:id should return car detail', async () => {
    const res = await request(app).get('/cars/1');
    const toyota = {
      id: '1',
      make: 'toyota',
      model: 'corolla',
      year: 1996,
    };
    expect(res.body).toEqual(toyota);
  });

  it('/books should return list of books', async () => {
    const res = await request(app).get('/books/1');
    const allAboutLove = {
      id: '1',
      title: 'all about love',
      author: 'bell hooks',
      published: 2000,
    };
    expect(res.body).toEqual(allAboutLove);
  });

  afterAll(() => {
    pool.end();
  });
});
