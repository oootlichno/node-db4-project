/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
await knex('ingredients').del();
await knex('ingredients').insert([
  { ingredient_name: 'Spaghetti', ingredient_qty: 200 },
  { ingredient_name: 'Water', ingredient_qty: 1 },
  { ingredient_name: 'Eggs', ingredient_qty: 2 },
  { ingredient_name: 'Flour', ingredient_qty: 100 },
  { ingredient_name: 'Milk', ingredient_qty: 150 }
]);
};
