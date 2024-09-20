/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema
    .createTable('recipe', table => {
        table.increments('recipe_id');
        table.string('recipe_name', 300)
              .notNullable()
              .unique();
        table.timestamps(true, true); 
    })

    .createTable('step', table => {
        table.increments('step_id');
        table.integer('step_number').notNullable();
        table.string('step_description').notNullable();
        table.integer('recipe_id')
              .unsigned()
              .notNullable()
              .references('recipe_id')
              .inTable('recipe') 
              .onDelete('RESTRICT')
              .onUpdate('RESTRICT');
    })

    .createTable('ingredients', table => {
        table.increments('ingredient_id'); 
        table.string('ingredient_name', 128).notNullable();
        table.float('ingredient_qty');
    })

    .createTable('step_ingredients', table => {
        table.increments('step_ingredient_id');
        table.integer('step_id')
              .unsigned()
              .notNullable()
              .references('step_id')
              .inTable('step') 
              .onDelete('RESTRICT')
              .onUpdate('RESTRICT');
        table.integer('ingredient_id')
              .unsigned()
              .notNullable()
              .references('ingredient_id')
              .inTable('ingredients') 
              .onDelete('RESTRICT')
              .onUpdate('RESTRICT');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema
    .dropTableIfExists('step_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('step')
    .dropTableIfExists('recipe');
};
