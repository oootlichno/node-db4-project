const express = require('express');
const recipe = require('./recipe_model');

const router = express.Router();

router.get('/recipe/:id', (req, res, next) => {
  const { id } = req.params;

  recipe.getRecipeById(id)
    .then(rec => {
      if (rec) {
        res.status(200).json(rec);
      } else {
        res.status(404).json({ message: 'Recipe not found' });
      }
    })
    .catch(next);
});

module.exports = router;
