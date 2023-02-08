const db = require('../connection');

const createNewUser = function(user) {
  return db.
  query(`INSERT INTO users (username, email, password) VALUES ($1, $2, $3 , $4) RETURNING *;`, [user.username, user.email, user.password])
  .then(result => result.rows[0])
  .catch(err => console.log(err));
}

module.exports = { createNewUser };