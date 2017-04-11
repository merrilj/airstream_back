exports.seed = function(knex, Promise) {
  return knex.raw("TRUNCATE airports RESTART IDENTITY CASCADE")
    .then( () => {
      return Promise.all([
        knex('airports').insert({name: 'DENVER INTERNATIONAL AIRPORT', code: 'DEN'}),
        knex('airports').insert({name: 'DALLAS FT WORTH INTERNATIONAL AIRPORT', code: 'DFW'}),
        knex('airports').insert({name: 'JOHN F KENNEDY INTERNATIONAL AIRPORT', code: 'JFK'})
      ]);
    });
};
