/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('step_ingredients').del();
  await knex('step_ingredients').insert([
    { step_id: 2, ingredient_id: 1 }, // Add spaghetti to boiling water
    { step_id: 3, ingredient_id: 2 }, // Water for boiling spaghetti
    { step_id: 5, ingredient_id: 3 }, // Eggs for scrambled eggs
    { step_id: 7, ingredient_id: 4 }, // Flour for pancakes
    { step_id: 7, ingredient_id: 5 }  // Milk for pancakes
  ]);
};
