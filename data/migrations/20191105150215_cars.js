// the changes to make
exports.up = function(knex) {
  return knex.schema.createTable("cars", function(table) {
    // adds a primary key, called 'id' as and auto-increment integer, not null and unique
    table.increments();

    table.integer("vin", 128).notNullable();
    table.string("make", 64).notNullable();
    table.string("model", 64).notNullable();
    table.integer("mileage").notNullable();
    table.string("status", 64);
    table.string("transmission");
  });
};

// how to undo those changes
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
