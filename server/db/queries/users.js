const db = require('../connection');

const createNewUser = function(user) {
  const {username, email, password} = user;
  const dbquery = `INSERT INTO "users" (username, email, password) VALUES ($1, $2, $3) RETURNING *;`
  return db.
  query(dbquery , [username, email, password])
  .then(result => result.rows[0])
  .catch(err => console.log(err));
}

const getUser = function(data) {
  const dbquery = `SELECT * FROM users WHERE email = $1;`
  return db.
  query(dbquery, [data.email])
  .then(result => result.rows[0])
  .catch(err => console.log(err));
}
module.exports = { createNewUser, getUser };