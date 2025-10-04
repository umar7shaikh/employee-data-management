const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./employees.db', (err) => {
  if (err) console.error('DB connection error:', err.message);
  else console.log('Connected to SQLite database');
});

// Create table if not exists
db.run(`CREATE TABLE IF NOT EXISTS employees (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  position TEXT NOT NULL
);`);

module.exports = db;
