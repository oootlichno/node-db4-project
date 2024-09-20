const db = require('../db-config');

async function getRecipeById(recipe_id) {
  const rows = await db('recipe as r')
    .leftJoin('step as s', 'r.recipe_id', 's.recipe_id')
    .leftJoin('step_ingredients as si', 's.step_id', 'si.step_id')
    .leftJoin('ingredients as i', 'si.ingredient_id', 'i.ingredient_id')
    .select(
      'r.recipe_id',
      'r.recipe_name',
      's.step_id',
      's.step_number',
      's.step_description',
      'i.ingredient_id',
      'i.ingredient_name',
      'i.ingredient_qty'
    )
    .where('r.recipe_id', recipe_id);

  if (rows.length === 0) {
    return null; 
  }

  const recipe = {
    recipe_id: rows[0].recipe_id,
    recipe_name: rows[0].recipe_name,
    steps: []
  };

  rows.forEach(row => {
    
    let step = recipe.steps.find(s => s.step_id === row.step_id);
    if (!step) {
      step = {
        step_id: row.step_id,
        step_number: row.step_number,
        step_description: row.step_description,
        ingredients: []
      };
      recipe.steps.push(step);
    }

    if (row.ingredient_id) {
      step.ingredients.push({
        ingredient_id: row.ingredient_id,
        ingredient_name: row.ingredient_name,
        ingredient_qty: row.ingredient_qty
      });
    }
  });

  return recipe;
}

module.exports = {
  getRecipeById
};
