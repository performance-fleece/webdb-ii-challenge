const express = require('express');

const router = express.Router();

const Cars = require('../data/carsDb.js');

// USE '/api/cars/

router.get('/', async (req, res) => {
  try {
    const carlist = await Cars.get();
    console.log(carlist);
    res.status(200).json(carlist);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'The Cars information could not be found' });
  }
});

router.post('/', async (req, res) => {
  try {
    const car = await Cars.insert(req.body);
    console.log(car);
    res.status(201).json(car);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Error creating new car entry' });
  }
});

module.exports = router;
