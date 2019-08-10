exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('cars').insert([
        {
          vin: '12345678901234567',
          make: 'Chevy',
          model: 'El Camino',
          mileage: 1970,
          transmission: null,
          title: null
        },
        {
          vin: '1234567890123456A',
          make: 'Ford',
          model: 'Ranchero',
          mileage: 1971,
          transmission: null,
          title: null
        }
      ]);
    });
};
