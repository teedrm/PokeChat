DROP TABLE IF EXISTS rooms CASCADE;
CREATE TABLE rooms (
  id SERIAL PRIMARY KEY NOT NULL,
  RName VARCHAR(255) NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
)

-- maybe add a password later