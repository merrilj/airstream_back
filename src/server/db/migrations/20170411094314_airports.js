exports.up = (knex, Promise) => {
  return knex.schema.createTable('airports', (table) => {
    table.increments().notNullable().primary();
    table.string('name').unique().notNullable();
    table.string('code').unique().notNullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('airports');
};
