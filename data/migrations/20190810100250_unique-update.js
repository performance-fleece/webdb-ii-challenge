exports.up = function(knex, Promise) {
  return knex.schema.alterTable('cars', tbl => {
    tbl.unique('VIN');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropUnique('cars');
};
