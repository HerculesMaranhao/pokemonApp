var Pokemon = require('../models/pokemon.model');

exports.find = function (req, res) {
  res.send('Olá! Pokemon ao Controller');
};

exports.create = function (req, res, next) {
  let pokemon = new Pokemon(
    {
      code: req.body.code,
      name: req.body.name,
      alias: req.body.alias,
      category: req.body.category,
      types: req.body.types,
      egg_groups: req.body.egg_groups,
      moves: req.body.moves,
      region: req.body.region,
      generation: req.body.generation
    }
  );
  
  pokemon.save(function (err) {
    if (err) {
      return next(err);
    }
    res.send('Pokemon adicionado com sucesso')
  })
};