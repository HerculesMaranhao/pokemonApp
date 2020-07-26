const express = require('express');
const router = express.Router();

const pokemon_controller = require('../controllers/pokemon.controller');
const categories_controller = require('../controllers/categories.controller');
const regions_controller = require('../controllers/regions.controller');
const moves_controller = require('../controllers/moves.controller');
const generations_controller = require('../controllers/generations.controller');
const types_controller = require('../controllers/types.controller');

router.get('/pokemon', pokemon_controller.find);
router.post('/pokemon', pokemon_controller.create);

router.get('/categories', categories_controller.find);
router.post('/categories', categories_controller.create);

router.get('/regions', regions_controller.find);
router.post('/regions', regions_controller.create);

router.get('/moves', moves_controller.find);
router.post('/moves', moves_controller.create);

router.get('/generations', generations_controller.find);
router.post('/generations', generations_controller.create);

router.get('/types', types_controller.find);
router.post('/types', types_controller.create);

module.exports = router;