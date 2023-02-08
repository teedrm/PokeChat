const db = require('../connection');

const createNewUser = function(user) {
  return db.
  query(`INSERT INTO users (username, email, password, character) VALUES ($1, $2, $3 , $4) RETURNING *;`, [user.username, user.email, user.password, user.character])
  .then(result => result.rows[0])
  .catch(err => console.log(err));
}

module.exports = { createNewUser };