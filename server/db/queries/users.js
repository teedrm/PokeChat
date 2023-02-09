const db = require('../connection');

const createNewUser = function(user) {
  console.log("USERS",user);
  const {username, email, password} = user;
  const dbquery = `INSERT INTO "users" (username, email, password) VALUES ($1, $2, $3) RETURNING *;`
  return db.
  query(dbquery , [username, email, password])
  .then(result => result.rows[0])
  .catch(err => console.log(err));
}

module.exports = { createNewUser };