/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('step').del();
  await knex('step').insert([
    { step_number: 1, step_description: 'Boil water', recipe_id: 1 },
    { step_number: 2, step_description: 'Add spaghetti', recipe_id: 1 },
    { step_number: 3, step_description: 'Cook for 10 minutes', recipe_id: 1 },
    { step_number: 1, step_description: 'Crack eggs into bowl', recipe_id: 2 },
    { step_number: 2, step_description: 'Whisk eggs', recipe_id: 2 },
    { step_number: 3, step_description: 'Cook eggs in pan', recipe_id: 2 },
    { step_number: 1, step_description: 'Mix flour and milk', recipe_id: 3 },
    { step_number: 2, step_description: 'Cook on hot griddle', recipe_id: 3 }
  ]);
};
