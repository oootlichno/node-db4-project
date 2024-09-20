/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('recipe').del();
    await knex('recipe').insert([
    { recipe_name: 'Spaghetti Bolognese' },
    { recipe_name: 'Scrambled Eggs' },
    { recipe_name: 'Pancakes' }
  ]);
};
